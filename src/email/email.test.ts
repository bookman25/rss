jest.unmock('./index');

import { createTransport } from 'nodemailer';
import { email } from './';
import { ISmtp } from '../electron/config';

describe('send email', () => {
	const sendMail = jest.fn();
	const transport = createTransport as jest.Mock<any>;
	const smtpSettings: ISmtp = {
		host: '',
		port: null,
		user: 'user@mail.com',
		password: '',
	};
	const to = 'email@address.com';

	beforeEach(() => {
		transport.mockClear();
		transport.mockReturnValue({ sendMail });
		sendMail.mockClear();
		email({ smtpSettings, to, repositories: null });
	});

	it('creates a transporter with the smtp settings', () => {
		expect(transport).toBeCalledWith({
			host: smtpSettings.host,
			port: smtpSettings.port,
			auth: {
				user: smtpSettings.user,
				pass: smtpSettings.password,
			},
		});
	});

	it(`sends using the 'to' parameter`, () => {
		expect(sendMail).toBeCalledWith(jasmine.objectContaining({ to }));
	});
});