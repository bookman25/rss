import * as React from 'react';
import { Fieldset } from './Fieldset';
import { Input } from './Fields';
import { IRepositoryConfig } from '../query';

interface IProps {
	repositories: IRepositoryConfig[];
	updateRepos(repositories: IRepositoryConfig[]): void;
}

export function Repositories(props: IProps) {
	const editedRepos = props.repositories.filter(r => !!r.owner || !!r.repo);
	if (editedRepos.every(r => !!r.owner && !!r.repo) || editedRepos.length === 0) {
		editedRepos.push({ owner: '', repo: '' });
	}
	return (
		<Fieldset label='Repositories'>
			{ editedRepos.map((repository, i) => (
				<div key={ i }>
					<Input
						label='Owner'
						value={ repository.owner }
						updateValue={ owner => props.updateRepos([
							...editedRepos.slice(0, i),
							{ owner, repo: repository.repo },
							...editedRepos.slice(i + 1),
						]) } />
					<Input
						label='Repo'
						value={ repository.repo }
						updateValue={ repo => props.updateRepos([
							...editedRepos.slice(0, i),
							{ owner: repository.owner, repo },
							...editedRepos.slice(i + 1),
						]) } />
				</div>
			)) }
		</Fieldset>
	);
}