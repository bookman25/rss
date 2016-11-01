import './tsHelpers';
import * as readline from 'readline';
import { scheduleJob } from 'node-schedule';
import { usage } from 'yargs';
import email from './email/email';
import query from './query/query';

const { argv: { r: to, t: token, smtp, repositories, schedule } } = usage('Usage: $0 -r [email]')
	.option('r', {
		alias: 'recipient',
		describe: 'Recipient email adress',
		demand: true,
		type: 'string',
		requiresArg: true
	})
	.option('t', {
		alias: 'token',
		describe: 'private github token used to increase rate-limit for github apis',
		type: 'string'
	})
	.option('s', {
		alias: 'schedule',
		default: '* 7 * * *',
		describe: 'cron schedule for frequency of job',
		type: 'string'
	})
	.config('config')
	.default('config', './config.json')
	.help('h')
	.alias('h', 'help')
	.example('$0 info@email.com', 'Send email for repositories')
	.example('$0 -r info@email.com -t privateToken', '');

const rl = readline.createInterface(process.stdin, process.stdout);
console.log(`Type 'quit' to abort`);
console.log(`Press 'enter' to send now`);
rl.on('line', input => {
	if (input === 'quit') {
		job.cancel();
		process.stdin.pause();
	}
	if (input === '') {
		sendEmail();
	}
});
const sendEmail = () => {
	console.log('Sending email at: ' + new Date());
	query({
		token,
		repositories
	}).then(results => email({ smtpSettings: smtp, to, repositories: results }))
		.catch(console.error);
};
const job = scheduleJob(schedule, sendEmail);