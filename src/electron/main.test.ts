jest.unmock('./main');

import { app } from 'electron';
import { loadConfig } from './config';
import { loadTray } from './loadTray';
import { scheduleJob } from 'node-schedule';
import { sendEmail } from '../email/sendEmail';

describe('main', () => {
	const mockLoadConfig = loadConfig as jest.Mock<any>;
	const mockLoadTray = loadTray as jest.Mock<any>;
	const mockQuit = app.quit as jest.Mock<any>;
	const mockScheduleJob = scheduleJob as jest.Mock<any>;
	const mockSendEmail = sendEmail as jest.Mock<any>;
	let onReadyCallback: () => void;
	let onQuitCallback: () => void;

	beforeEach(() => {
		jest.resetAllMocks();
		mockLoadConfig.mockReturnValue({
			repositories: [],
		});
		app.on = jest.fn((event, callback) => {
			if (event === 'ready') {
				onReadyCallback = callback;
			} else {
				onQuitCallback = callback;
			}
		});
	});

	it('should cancel the pending job on quit', () => {
		mockLoadConfig.mockReturnValue({
			schedule: 'schedule',
			repositories: [],
		});
		const job = {
			cancel: jest.fn(),
		};
		mockScheduleJob.mockReturnValue(job);
		require('./main');
		onReadyCallback();
		onQuitCallback();
		expect(job.cancel).toBeCalled();
	});

	describe('app on ready', () => {
		beforeEach(() => {
			require('./main');
			onReadyCallback();
		});

		it('should loadTray on ready', () => {
			expect(mockLoadTray).toBeCalled();
		});

		it('should quit the app on tray quit', () => {
			mockLoadTray.mock.calls[0][2]();
			expect(mockQuit).toBeCalled();
		});

		it('should send email from tray', () => {
			mockLoadTray.mock.calls[0][1]();
			expect(mockSendEmail).toBeCalled();
		});
	});
});