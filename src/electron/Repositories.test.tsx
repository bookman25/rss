jest.unmock('./Repositories');

import * as React from 'react';
import { Input } from './Fields';
import { Repositories } from './Repositories';
import { shallow } from 'enzyme';

const updateRepos = jest.fn();
type Props = React.ComponentProps<typeof Repositories>;
const props: Props = {
	repositories: [],
	updateRepos,
};

it('should initialize with and empty repo/owner when none exist', () => {
	const view = shallow(<Repositories {...props} />);
	expect(view.find(Input).filter({ label: 'Owner' }).props().value).toBe('');
	expect(view.find(Input).filter({ label: 'Repo' }).props().value).toBe('');
});

it('should map repo and owner for a repository', () => {
	const repoProps: Props = {
		...props,
		repositories: [{
			owner: 'owns',
			repo: 'repos',
		}],
	};
	const view = shallow(<Repositories {...repoProps} />);
	expect(view.find(Input).filter({ label: 'Owner' }).first().props().value).toBe('owns');
	expect(view.find(Input).filter({ label: 'Repo' }).first().props().value).toBe('repos');
});