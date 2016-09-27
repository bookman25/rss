jest.unmock('./query');

import * as api from 'github';
import query, { IQuery } from './query';

describe('github queries', () => {
	it('should not authenticate when no token is used', () => {
		const data: IQuery = {
			repos: []
		};
		return query(data).then(() => {
			expect(api.prototype.authenticate).not.toBeCalled();
		});
	});

	it('should authenticate with token', () => {
		const token = 'value';
		const data: IQuery = {
			repos: [],
			token
		};
		return query(data).then(() => {
			expect(api.prototype.authenticate).toBeCalledWith({ type: 'token', token });
		});
	});
});