import * as api from 'github';

interface IRepo {
	user: string;
	repo: string;
}

export interface IQuery {
	token?: string;
	repos: IRepo[];
}

export default function ({ token, repos }: IQuery) {
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

	return Promise.all(repos.map(repo => {
		const commitInfo = github.gitdata.getReference(Object.assign({
			ref: 'heads/master',
		}, repo)).then(latestCommit => github.gitdata.getCommit(Object.assign({
			sha: latestCommit.object.sha
		}, repo)));

		const releaseInfo = github.repos.getReleases(repo);
		const milestoneInfo = github.issues.getMilestones(repo);
		return Promise.all([repo.repo, commitInfo, releaseInfo, milestoneInfo]);
	}));
}