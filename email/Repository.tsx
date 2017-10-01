import * as React from 'react';
import { Commit, ICommit } from './Commit';
import { IRepositoryConfig } from '../query';
import { Milestones, IMilestone } from './Milestones';
import { Releases, IRelease } from './Releases';

export interface IProps {
	repo: IRepositoryConfig;
	commit?: ICommit;
	releases?: IRelease[];
	milestones?: IMilestone[];
}

export function Repository({ repo, commit, releases, milestones }: IProps) {
	return (
		<div>
			<h2><a href={ `https://github.com/${repo.owner}/${repo.repo}` }>{ repo.repo }</a></h2>
			<Commit {...commit} />
			<Releases releases={ releases } />
			<Milestones milestones={ milestones } />
		</div>
	);
}