jest.unmock('./query');

import * as api from 'github';
import query, { IQuery } from './query';

describe('github queries', () => {
	it('should not authenticate when no token is used', () => {
		const data: IQuery = {
			repositories: []
		};
		return query(data).then(() => {
			expect(api.prototype.authenticate).not.toBeCalled();
		});
	});

	it('should authenticate with token', () => {
		const token = 'value';
		const data: IQuery = {
			repositories: [],
			token
		};
		return query(data).then(() => {
			expect(api.prototype.authenticate).toBeCalledWith({ type: 'token', token });
		});
	});
});