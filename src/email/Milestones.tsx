import * as React from 'react';

export interface IMilestones {
	milestones: IMilestone[];
}

export interface IMilestone {
	due_on?: string;
	html_url?: string;
	open_issues?: number;
	title: string;
}

export function Milestones({ milestones }: IMilestones) {
	if (!milestones || milestones.length === 0) {
		return null;
	}

	return (
		<p>
			<strong>Milestones: </strong>
			{ milestones.map((milestone, m) => (
				<span key={ m }>
					{ m !== 0 && ' | ' }
					<i><a href={ milestone.html_url }>{ milestone.title }</a></i> (open: { milestone.open_issues }
					{ milestone.due_on && `, due: ${milestone.due_on}` })
			</span>
			)) }
		</p>
	);
}