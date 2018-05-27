import * as api from '@octokit/rest';

export interface IRepositoryConfig {
	owner: string;
	repo: string;
}

export interface IQuery {
	token?: string;
	repositories: IRepositoryConfig[];
}

export function query({ token, repositories }: IQuery) {
	const github = new api();

	if (token) {
		github.authenticate({
			type: 'token',
			token,
		});
	}

	return Promise.all(repositories.filter(r => !!r.owner && !!r.repo).map(repo => {
		const commitInfo = github.gitdata.getReference({
			...repo,
			ref: 'heads/master',
		}).then(({ data: latestCommit }) => github.gitdata.getCommit({
			...repo,
			commit_sha: latestCommit.object.sha,
			sha: latestCommit.object.sha,
		})).then(({ data }) => data);

		const releaseInfo = github.repos.getReleases(repo)
			.then(({ data: releases }) => {
				if (releases.length > 0) {
					return releases;
				}
				return github.repos.getTags(repo).then(({ data: tags }) =>
					tags.map(tag => ({
						...tag,
						html_url: `https://github.com/${repo.owner}/${repo.repo}/releases/tag/${tag.name}`,
					})));
			});
		const milestoneInfo = github.issues.getMilestones(repo).then(({ data }) => data);
		return Promise.all([repo, commitInfo, releaseInfo, milestoneInfo]);
	}));
}