import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import Repository, { ICommit, IRelease, IMilestone } from './Repository';

export type Repositories = [string, ICommit, IRelease[], IMilestone[]][];

export default function getBody(repositories: Repositories) {
	return renderToStaticMarkup((
		<div>
			{ repositories.map(([repo, commit, releases, milestones], i) =>
				<Repository
					key={ i }
					repo={ repo }
					commit={ commit }
					releases={ releases }
					milestones={ milestones } />
			) }
		</div>
	));
}