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

	it('should not terminate on random character', () => {
		process.stdin.emit('data', 'q\n');
		expect(cancel).not.toBeCalled();
	});

	it(`should terminate on 'quit'`, () => {
		process.stdin.emit('data', 'quit\n');
		expect(cancel).toBeCalled();
	});

	describe('should send', () => {
		const repositories = [];
		const queryResult = Promise.resolve(repositories);
		const queryMock = query as jest.Mock<any>;

		beforeEach(() => {
			queryMock.mockReturnValue(queryResult);
			queryMock.mockClear();
		});

		it(`should send on 'enter'`, () => {
			process.stdin.emit('data', '\n');
			expect(queryMock).toBeCalled();
		});

		it('schedules the job and emails the results', () => {
			scheduleJobMock.mock.calls[0][1]();

			return queryResult.then(() => {
				expect(queryMock).toBeCalled();
				expect(email).toBeCalledWith(jasmine.objectContaining({ repositories }));
			});
		});
	});
});