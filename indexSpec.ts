jest.unmock('./index');
jest.mock('yargs', () => {
	let exampleReturned = false;
	return {
		usage: jest.fn().mockReturnThis(),
		option: jest.fn().mockReturnThis(),
		coerce: jest.fn().mockReturnThis(),
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

import email from './email/email';
import query from './query/query';

describe('index', () => {
	it('calls query and pass data to email', () => {
		const repositories = [];
		const queryResult = Promise.resolve(repositories);
		(query as jest.Mock<any>).mockReturnValue(queryResult);

		require('./index');
		return queryResult.then(() => {
			expect(query).toBeCalled();
			expect(email).toBeCalledWith(jasmine.objectContaining({ repositories }));
		});
	});
});