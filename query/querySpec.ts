jest.unmock('./index');
jest.mock('@octokit/rest', () => () => ({
	authenticate,
	gitdata: {
		getReference,
		getCommit,
	},
	repos: {
		getReleases,
		getTags,
	},
	issues: {
		getMilestones,
	},
}));
const authenticate = jest.fn();
const getReference = jest.fn();
const getCommit = jest.fn();
const getReleases = jest.fn();
const getMilestones = jest.fn();
const getTags = jest.fn();

import { query, IRepositoryConfig } from './';

describe('github queries', () => {
	beforeEach(() => {
		getTags.mockClear();
		getReleases.mockClear();
		getReference.mockClear();
		authenticate.mockClear();
		getCommit.mockClear();
		getMilestones.mockClear();
		getReleases.mockReturnValue(Promise.resolve({ data: [{}] }));
		getMilestones.mockReturnValue(Promise.resolve({ data: {} }));
	});

	it('not authenticate when no token is used', () => {
		return query({ repositories: [] }).then(() => {
			expect(authenticate).not.toBeCalled();
		});
	});

	it('authenticate with token', () => {
		const token = 'value';
		return query({ repositories: [], token }).then(() => {
			expect(authenticate).toBeCalledWith({ type: 'token', token });
		});
	});

	describe('', () => {
		const repositories: IRepositoryConfig[] = [{
			owner: 'user',
			repo: 'repo',
		}];
		const latestCommit = {
			data: {
				object: {
					sha: 'hash',
				},
			},
		};
		const commitInfo = {};

		it('fetch latest commit for repo', () => {
			getReference.mockReturnValue(Promise.resolve(latestCommit));
			getCommit.mockReturnValue(Promise.resolve({ data: commitInfo }));

			return query({ repositories }).then(result => {
				expect(result[0][1]).toBe(commitInfo);
			});
		});

		it('should check tags if get releases has no items', () => {
			getTags.mockReturnValue(Promise.resolve({ data: [] }));
			getReleases.mockReturnValue(Promise.resolve({ data: [] }));
			return query({ repositories }).then(() => {
				expect(getTags).toBeCalled();
			});
		});
	});
});