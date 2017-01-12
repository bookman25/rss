import * as React from 'react';
import { ICommit } from './Commit';
import { IMilestone } from './Milestones';
import { IRelease } from './Releases';
import { IRepositoryConfig } from '../query';
import { renderToStaticMarkup } from 'react-dom/server';
import Repository from './Repository';

export type Repositories = [IRepositoryConfig, ICommit, IRelease[], IMilestone[]][];

export default function getBody(repositories: Repositories) {
	return renderToStaticMarkup((
		<div>
			{ repositories.map(([repo, commit, releases, milestones], i) =>
				<Repository
					key={ i }
					repo={ repo }
					commit={ commit }
					releases={ releases }
					milestones={ milestones } />,
			) }
		</div>
	));
}