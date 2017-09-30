import * as React from 'react';

export interface IReleases {
	releases: IRelease[];
}

export interface IRelease {
	html_url?: string;
	name?: string;
	tag_name?: string;
}

export function Releases({ releases }: IReleases) {
	if (!releases || releases.length === 0) {
		return null;
	}

	const release = releases[0];
	return (
		<p>
			<strong>Latest release: </strong>
			<a href={ release.html_url }>{ release.name || release.tag_name }</a>
		</p>
	);
}