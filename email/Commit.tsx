import * as React from 'react';

export interface ICommit {
	committer: {
		date: string;
	};
	message: string;
}

export default function Commit(commit: ICommit) {
	return <p>
		<strong>Last commit date: </strong>
		{ commit.committer.date }
		<i> { commit.message }</i>
	</p>;
}