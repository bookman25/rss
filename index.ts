import './tsHelpers';
import email from './email/email';
import loadConfig from './loadConfig';
import query from './query/query';

const config = loadConfig();

query({
	token: config.token,
	repos: config.repos
}).then(data => email({ to: config.to, data }));