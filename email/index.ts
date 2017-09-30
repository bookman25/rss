import { createTransport } from 'nodemailer';
import { getBody, Repositories } from './getBody';
import { ISmtp } from '../config';
import { SmtpOptions } from 'nodemailer-smtp-transport';

export interface IEmail {
	smtpSettings: ISmtp;
	to: string;
	repositories: Repositories;
}

export function email({ smtpSettings, to, repositories }: IEmail) {
	const options: SmtpOptions = {
		host: smtpSettings.host,
		port: smtpSettings.port,
		auth: {
			user: smtpSettings.user,
			pass: smtpSettings.password,
		},
	};
	const transporter = createTransport(options);
	return transporter.sendMail({
		to,
		from: smtpSettings.user,
		subject: 'github status check',
		html: getBody(repositories),
	});
}