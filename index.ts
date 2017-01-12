import './tsHelpers';
import * as path from 'path';
import { notify } from 'node-notifier';
import { scheduleJob } from 'node-schedule';
import { usage } from 'yargs';
import email from './email/email';
import query from './query/query';

const { argv: { r: to, t: token, smtp, repositories, schedule } } = usage('Usage: $0 -r [email]')
	.option('r', {
		alias: 'recipient',
		type: 'string',
	})
	.option('t', {
		alias: 'token',
		type: 'string'
	})
	.option('s', {
		alias: 'schedule',
		default: '* 7 * * *',
		type: 'string'
	})
	.config('config')
	.default('config', path.resolve(__dirname, './config.json'));

notify({
	icon: path.resolve(__dirname, 'rss.ico'),
	title: 'Started',
	message: 'At ' + new Date()
});
export const sendEmail = () => {
	notify({
		title: 'Email sent',
		message: 'At ' + new Date()
	});
	query({
		token,
		repositories
	}).then(results => email({ smtpSettings: smtp, to, repositories: results }))
		.catch(console.error);
};
export const job = scheduleJob(schedule, sendEmail);