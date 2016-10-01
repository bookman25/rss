jest.unmock('./email');

import { createTransport } from 'nodemailer';
import { SmtpOptions } from 'nodemailer-smtp-transport';
import email from './email';

describe('send email', () => {
	const sendMail = jest.fn();
	const transport = createTransport as jest.Mock<any>;
	const smtpSettings: SmtpOptions = {
		auth: {
			user: 'user@mail.com'
		}
	};
	const to = 'email@address.com';

	beforeEach(() => {
		transport.mockClear();
		transport.mockReturnValue({ sendMail });
		sendMail.mockClear();
		email({ smtpSettings, to, repositories: null });
	});

	it('creates a transporter with the smtp settings', () => {
		expect(transport).toBeCalledWith(smtpSettings);
	});

	it(`sends using the 'to' parameter`, () => {
		expect(sendMail).toBeCalledWith(jasmine.objectContaining({ to }));
	});
});