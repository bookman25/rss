import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import Repository, { ICommit, IRelease, IMilestone } from './Repository';

export type Body = [string, ICommit, IRelease[], IMilestone[]][];

export default function getBody(data: Body) {
	return renderToStaticMarkup((
		<div>
			{ data.map(([repo, commit, releases, milestones], i) =>
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