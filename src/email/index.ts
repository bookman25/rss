import { createTransport } from 'nodemailer';
import { getBody, Repositories } from './getBody';
import { ISmtp } from '../electron/config';

export interface IEmail {
	smtpSettings: ISmtp;
	to: string;
	repositories: Repositories;
}

export function email({ smtpSettings, to, repositories }: IEmail) {
	const transporter = createTransport({
		host: smtpSettings.host,
		port: smtpSettings.port,
		auth: {
			user: smtpSettings.user,
			pass: smtpSettings.password,
		},
	});
	return transporter.sendMail({
		to,
		from: smtpSettings.user,
		subject: 'github status check',
		html: getBody(repositories),
	});
}