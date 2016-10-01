jest.unmock('./email');

import * as sendmail from 'sendmail';
import email from './email';

describe('send email', () => {
	const client = jest.fn();

	beforeAll(() => {
		(sendmail as jest.Mock<any>).mockReturnValue(client);
	});

	beforeEach(() => {
		client.mockClear();
	});

	it(`sends using the 'to' parameter`, () => {
		const to = 'email@address.com';
		email({ to, repositories: null });
		expect(client).toBeCalledWith(jasmine.objectContaining({ to }));
	});
});