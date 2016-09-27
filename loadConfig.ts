import * as jsonfile from 'jsonfile';
import * as yargs from 'yargs';
import IRepo from './IRepo';

const { to, githubToken: token } = yargs.argv;
if (!token) {
	console.warn(`WARN: Parameter 'github-token' not set, using unauthenticated github api.`);
}

export default function loadConfig() {
	if (!to) {
		throw new Error(`Missing 'to' parameter`);
	}

	return {
		to,
		token,
		repos: jsonfile.readFileSync<IRepo[]>('./repos.json')
	};
}