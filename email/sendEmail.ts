import { IConfig } from '../config';
import { notify } from 'node-notifier';
import email from './';
import query from '../query';

export const sendEmail = (config: IConfig) => {
	const { token, repositories, smtpSettings, to } = config;
	notify({
		title: 'Email sent',
		message: 'At ' + new Date(),
	});
	query({
		token,
		repositories,
	}).then(results => email({ smtpSettings, to, repositories: results }))
		.catch(e => {
			notify({
				title: 'Error',
				message: e,
			});
		});
};