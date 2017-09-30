jest.unmock('./sendEmail');

import { email } from './';
import { IConfig } from '../config';
import { query } from '../query';
import { sendEmail } from './sendEmail';

describe('should send', () => {
	const results = [];
	const queryResult = Promise.resolve(results);
	const queryMock = query as jest.Mock<any>;
	const config: IConfig = {
		repositories: [],
		token: '',
		smtpSettings: {
			host: '',
			password: '',
			port: null,
			user: '',
		},
		schedule: '',
		to: '',
	};

	beforeEach(() => {
		queryMock.mockReturnValue(queryResult);
		queryMock.mockClear();
	});

	it('schedules the job and emails the results', () => {
		sendEmail(config);

		return queryResult.then(() => {
			expect(queryMock).toBeCalled();
			expect(email).toBeCalledWith(jasmine.objectContaining({ repositories: results }));
		});
	});
});