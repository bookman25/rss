import { email } from './';
import { IConfig } from '../config';
import { notify } from 'node-notifier';
import { query } from '../query';

export const sendEmail = (config: IConfig) => {
	const { token, repositories, smtpSettings, to } = config;
	query({
		token,
		repositories,
	}).then(results => email({ smtpSettings, to, repositories: results }))
		.then(() => {
			notify({
				title: 'Email sent',
				message: 'At ' + new Date(),
			});
		})
		.catch(e => {
			notify({
				title: 'Error',
				message: JSON.stringify(e),
			});
		});
};