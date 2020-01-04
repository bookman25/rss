jest.unmock('./getBody');

import * as React from 'react';
import { getBody, Repositories } from './getBody';
import { Repository } from './Repository';

describe('body of email', () => {
	const repository = Repository as jest.Mock<any>;

	beforeEach(() => {
		repository.mockClear();
		repository.mockReturnValue(<span />);
	});

	it('no repository', () => {
		getBody([]);
		expect(Repository).not.toBeCalled();
	});

	it('single repository', () => {
		getBody([[null, null, null, null]]);
		expect(repository).toHaveBeenCalledTimes(1);
	});

	it('2 repositories', () => {
		const repositories: Repositories = [];
		for (let i = 0; i < 2; i++) {
			repositories.push([null, null, null, null]);
		}
		getBody(repositories);
		expect(repository).toHaveBeenCalledTimes(2);
	});
});