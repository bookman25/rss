import * as sendmail from 'sendmail';
import getBody, { Repositories } from './getBody';

interface IEmail {
	to: string;
	repositories: Repositories;
}

export default function email({ to, repositories }: IEmail) {
	sendmail({ silent: true })({
		to,
		from: to,
		subject: 'github status check',
		html: getBody(repositories)
	});
}