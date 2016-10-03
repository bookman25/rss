jest.unmock('./index');
jest.mock('yargs', () => {
	let exampleReturned = false;
	return {
		usage: jest.fn().mockReturnThis(),
		option: jest.fn().mockReturnThis(),
		config: jest.fn().mockReturnThis(),
		default: jest.fn().mockReturnThis(),
		help: jest.fn().mockReturnThis(),
		alias: jest.fn().mockReturnThis(),
		example: jest.fn(function () {
			if (!exampleReturned) {
				exampleReturned = true;
				return this;
			}
			return {
				argv: {
					config: {}
				}
			};
		})
	};
});

import { scheduleJob, Job } from 'node-schedule';
import email from './email/email';
import query from './query/query';

describe('run', () => {
	const scheduleJobMock = scheduleJob as jest.Mock<any>;
	let job: Job;
	const cancel = jest.fn();

	beforeAll(() => {
		scheduleJobMock.mockClear();
		job = new Job('');
		job.cancel = cancel;
		scheduleJobMock.mockReturnValue(job);
		require('./index');
	});

	beforeEach(() => {
		cancel.mockClear();
	});

	afterEach(() => {
		process.stdin.pause();
	});

	it('schedules the job and emails the results', () => {
		const repositories = [];
		const queryResult = Promise.resolve(repositories);
		(query as jest.Mock<any>).mockReturnValue(queryResult);
		scheduleJobMock.mock.calls[0][1]();

		return queryResult.then(() => {
			expect(query).toBeCalled();
			expect(email).toBeCalledWith(jasmine.objectContaining({ repositories }));
		});
	});

	it('should not terminate on random character', () => {
		process.stdin.emit('data', '60');
		expect(cancel).not.toBeCalled();
	});

	it(`should terminate on 'a'`, () => {
		process.stdin.emit('data', '61');
		expect(cancel).toBeCalled();
	});
});