jest.unmock('./Repository');

import * as React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Repository, { IProps } from './Repository';

describe('Respository template', () => {
	it('repository name when no other data', () => {
		const view = shallow(<Repository repo='name' />);
		expect(shallowToJson(view)).toMatchSnapshot();
	});

	it('repository name, commit info, latest release, current milestones', () => {
		const props: IProps = {
			repo: 'name',
			commit: {
				committer: {
					date: '2016-9-30'
				},
				message: 'commit message'
			},
			milestones: [
				{
					title: 'Milestone 1',
					open_issues: 1
				}
			],
			releases: [
				{
					name: 'Latest release'
				}
			]
		};
		const view = shallow(<Repository {...props} />);
		expect(shallowToJson(view)).toMatchSnapshot();
	});
});