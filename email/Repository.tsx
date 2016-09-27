import * as React from 'react';

export interface ICommit {
	committer: {
		date: Date;
	};
	message: string;
}

export interface IRelease {
	name: string;
	tag_name: string;
}

export interface IMilestone {
	title: string;
	open_issues: number;
	due_on: string;
}

export interface IProps {
	repo: string;
	commit?: ICommit;
	releases?: IRelease[];
	milestones?: IMilestone[];
}

export default function ({ repo, commit, releases, milestones }: IProps) {
	return <div>
		<h2>{ repo }</h2>
		<p>
			<strong>Last commit date: </strong>
			{ commit.committer.date }
			<i> { commit.message }</i>
		</p>
		<p>
			<strong>Latest release: </strong>
			{ releases[0].name || releases[0].tag_name }
		</p>
		{ milestones.length > 0 &&
			<p>
				<strong>Milestones: </strong>
				{ milestones.map((milestone, m) =>
					<span key={ m }>
						{ m !== 0 && ' | ' }
						<i>{ milestone.title }</i> (open: { milestone.open_issues }
						{ milestone.due_on && `, due: ${milestone.due_on}` })
					</span>
				) }
			</p>
		}
	</div>;
}