import './tsHelpers';
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
		alias: 'github-token',
		describe: 'private github token used to increase rate-limit for github apis',
		type: 'string'
	})
	.option('s', {
		alias: 'schedule',
		describe: 'cron schedule for frequency of job',
		type: 'string'
	})
	.config('config')
	.default('config', './config.json')
	.help('h')
	.alias('h', 'help')
	.example('$0 info@email.com', 'Send email for repositories')
	.example('$0 -r info@email.com -t privateToken', '');

if (typeof process.stdin.setRawMode === 'function') {
	console.log(`Press 'a' to abort`);
	process.stdin.setRawMode(true);
	process.stdin.resume();
	process.stdin.setEncoding('hex');
	process.stdin.on('data', key => {
		if (key === '61') {
			job.cancel();
			process.stdin.pause();
		}
	});
}
const job = scheduleJob(schedule, () => {
	console.log('Sending email at: ' + new Date());
	query({
		token,
		repositories
	}).then(results => email({ smtpSettings: smtp, to, repositories: results }))
		.catch(console.error);
});