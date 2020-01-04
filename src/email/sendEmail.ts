import { email } from './';
import { IConfig } from '../electron/config';
import { notify } from 'node-notifier';
import { query } from '../query';

export const sendEmail = (config: IConfig) => {
	const { token, repositories, smtpSettings, to } = config;
	query({
		token,
		repositories,
	}).then(results => email({ smtpSettings, to, repositories: results }))
		.then(() => {
			if (!config.showNotifications) {
				return;
			}
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