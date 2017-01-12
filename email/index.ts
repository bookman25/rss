import { createTransport } from 'nodemailer';
import { ISmtp } from '../config';
import getBody, { Repositories } from './getBody';

export interface IEmail {
	smtpSettings: ISmtp;
	to: string;
	repositories: Repositories;
}

export default function email({ smtpSettings, to, repositories }: IEmail) {
	const transporter = createTransport({
		host: smtpSettings.host,
		port: smtpSettings.port,
		auth: {
			user: smtpSettings.user,
			password: smtpSettings.password,
		},
	} as any);
	transporter.sendMail({
		to,
		from: smtpSettings.user,
		subject: 'github status check',
		html: getBody(repositories),
	});
}