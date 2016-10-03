import * as React from 'react';
import { IRepositoryConfig } from '../query/query';
import Commit, { ICommit } from './Commit';
import Milestones, { IMilestone } from './Milestones';
import Releases, { IRelease } from './Releases';

export interface IProps {
	repo: IRepositoryConfig;
	commit?: ICommit;
	releases?: IRelease[];
	milestones?: IMilestone[];
}

export default function Repository({ repo, commit, releases, milestones }: IProps) {
	return <div>
		<h2><a href={ `https://github.com/${repo.user}/${repo.repo}` }>{ repo.repo }</a></h2>
		<Commit {...commit} />
		<Releases releases={ releases } />
		<Milestones milestones={ milestones } />
	</div>;
}