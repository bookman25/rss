jest.unmock('./index');
jest.mock('@octokit/rest', () => {
	const authenticate = jest.fn();
	const getReference = jest.fn();
	const getCommit = jest.fn();
	const getReleases = jest.fn();
	const getMilestones = jest.fn();
	const getTags = jest.fn();
	return {
		__esModule: true,
		default: jest.fn(() => ({
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
		})),
	};
});

import { query, IRepositoryConfig } from './';
import api from '@octokit/rest';
const github = new api();

describe('github queries', () => {
	beforeEach(() => {
		(github.repos.getReleases as jest.Mock).mockReturnValue(Promise.resolve({ data: [{}] }));
		(github.issues.getMilestones as jest.Mock).mockReturnValue(Promise.resolve({ data: {} }));
	});

	it('not authenticate when no token is used', async () => {
		await query({ repositories: [] });
		expect(github.authenticate).not.toBeCalled();
	});

	it('authenticate with token', async () => {
		const token = 'value';
		await query({ repositories: [], token });
		expect(github.authenticate).toBeCalledWith({ type: 'token', token });
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

		it('fetch latest commit for repo', async () => {
			(github.gitdata.getReference as jest.Mock).mockReturnValue(Promise.resolve(latestCommit));
			(github.gitdata.getCommit as jest.Mock).mockReturnValue(Promise.resolve({ data: commitInfo }));

			const result = await query({ repositories });
			expect(result[0][1]).toBe(commitInfo);
		});

		it('should check tags if get releases has no items', async () => {
			(github.repos.getTags as jest.Mock).mockReturnValue(Promise.resolve({ data: [] }));
			(github.repos.getReleases as jest.Mock).mockReturnValue(Promise.resolve({ data: [] }));
			await query({ repositories });
			expect(github.repos.getTags).toBeCalled();
		});
	});
});