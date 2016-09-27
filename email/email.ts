import * as sendmail from 'sendmail';
import getBody, { Body } from './getBody';

const client = sendmail({
	silent: true
});

interface IEmail {
	to: string;
	data: Body;
}

export default function email({ to, data }: IEmail) {
	client({
		to,
		from: to,
		subject: 'github status check',
		html: getBody(data)
	});
}