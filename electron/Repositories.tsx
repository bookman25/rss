import * as React from 'react';
import { Fieldset } from './Fieldset';
import { Input } from './Input';
import { IRepositoryConfig } from '../query';

interface IProps {
	repositories: IRepositoryConfig[];
	updateRepos(repositories: IRepositoryConfig[]): void;
}

export function Repositories(props: IProps) {
	const editedRepos = props.repositories.filter(r => !!r.user || !!r.repo);
	if (editedRepos.every(r => !!r.user && !!r.repo) || editedRepos.length === 0) {
		editedRepos.push({ user: '', repo: '' });
	}
	return (
		<Fieldset label='Repositories'>
			{ editedRepos.map((repository, i) => (
				<div key={ i }>
					<Input
						label='User'
						value={ repository.user }
						updateValue={ user => props.updateRepos([
							...editedRepos.slice(0, i),
							{ user, repo: repository.repo },
							...editedRepos.slice(i + 1),
						]) } />
					<Input
						label='Repo'
						value={ repository.repo }
						updateValue={ repo => props.updateRepos([
							...editedRepos.slice(0, i),
							{ user: repository.user, repo },
							...editedRepos.slice(i + 1),
						]) } />
				</div>
			)) }
		</Fieldset>
	);
}