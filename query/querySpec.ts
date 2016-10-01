jest.unmock('./query');
jest.mock('github', () => () => ({
	authenticate,
	gitdata: {
		getReference,
		getCommit
	},
	repos: {
		getReleases
	},
	issues: {
		getMilestones
	}
}));
const authenticate = jest.fn();
const getReference = jest.fn();
const getCommit = jest.fn();
const getReleases = jest.fn();
const getMilestones = jest.fn();

import query, { IRepositoryConfig } from './query';

describe('github queries', () => {
	const repositories = [];
	it('not authenticate when no token is used', () => {
		return query({ repositories }).then(() => {
			expect(authenticate).not.toBeCalled();
		});
	});

	it('authenticate with token', () => {
		const token = 'value';
		return query({ repositories, token }).then(() => {
			expect(authenticate).toBeCalledWith({ type: 'token', token });
		});
	});

	it('fetch latest commit for repo', () => {
		const repos: IRepositoryConfig[] = [{
			user: 'user',
			repo: 'repo'
		}];
		const latestCommit = {
			object: {
				sha: 'hash'
			}
		};
		const commitInfo = {};
		getReference.mockReturnValue(Promise.resolve(latestCommit));
		getCommit.mockReturnValue(Promise.resolve(commitInfo));

		return query({ repositories: repos }).then(result => {
			expect(result[0][1]).toBe(commitInfo);
		});
	});
});