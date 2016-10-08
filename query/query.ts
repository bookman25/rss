import * as api from 'github';

export interface IRepositoryConfig {
	user: string;
	repo: string;
}

export interface IQuery {
	token?: string;
	repositories: IRepositoryConfig[];
}

export default function ({ token, repositories }: IQuery) {
	const github = new api({
		debug: false,
		host: 'api.github.com',
		Promise: require('bluebird'),
		protocol: 'https',
		followRedirects: false
	});

	if (token) {
		github.authenticate({
			type: 'token',
			token
		});
	}

	return Promise.all(repositories.map(repo => {
		const commitInfo = github.gitdata.getReference(Object.assign({
			ref: 'heads/master',
		}, repo)).then(latestCommit => github.gitdata.getCommit(Object.assign({
			sha: latestCommit.object.sha
		}, repo)));

		const releaseInfo = github.repos.getReleases(repo)
			.then(releases => {
				if (releases.length > 0) {
					return releases;
				}
				return github.repos.getTags(repo).then(tags =>
					tags.map(tag => Object.assign(tag, {
						html_url: `https://github.com/${repo.user}/${repo.repo}/releases/tag/${tag.name}`
					})));
			});
		const milestoneInfo = github.issues.getMilestones(repo);
		return Promise.all([repo, commitInfo, releaseInfo, milestoneInfo]);
	}));
}