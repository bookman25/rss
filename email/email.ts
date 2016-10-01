import { createTransport } from 'nodemailer';
import { SmtpOptions } from 'nodemailer-smtp-transport';
import getBody, { Repositories } from './getBody';

interface IEmail {
	smtpSettings: SmtpOptions;
	to: string;
	repositories: Repositories;
}

export default function email({ smtpSettings, to, repositories }: IEmail) {
	const transporter = createTransport(smtpSettings);
	transporter.sendMail({
		to,
		from: smtpSettings.auth.user,
		subject: 'github status check',
		html: getBody(repositories)
	});
}