jest.unmock('./Repository');

import * as React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Repository, { IProps, IMilestone } from './Repository';

describe('Respository template', () => {
	it('repository name when no other data', () => {
		const view = shallow(<Repository repo='name' />);
		expect(shallowToJson(view)).toMatchSnapshot();
	});

	describe('repository name, commit info, latest release, current milestones', () => {
		const milestone1: IMilestone = {
			title: 'Milestone 1',
			open_issues: 1
		};
		const props: IProps = {
			repo: 'name',
			commit: {
				committer: {
					date: '2016-9-30'
				},
				message: 'commit message'
			},
			milestones: [milestone1],
			releases: [
				{
					name: 'Latest release'
				}
			]
		};

		it('without a release name', () => {
			const view = shallow(<Repository {...props} releases={ [{ tag_name: 'Tag Name' }] } />);
			expect(shallowToJson(view)).toMatchSnapshot();
		});

		it('multiple milestones', () => {
			const milestones: IMilestone[] = [
				milestone1,
				Object.assign({}, milestone1, {
					title: 'Milestone 2'
				})
			];
			const view = shallow(<Repository {...props} milestones={ milestones } />);
			expect(shallowToJson(view)).toMatchSnapshot();
		});

		it('without milestone due date', () => {
			const view = shallow(<Repository {...props} />);
			expect(shallowToJson(view)).toMatchSnapshot();
		});

		it('with milestone due date', () => {
			const milestone = Object.assign({}, milestone1, {
				due_on: 'due date'
			});
			const view = shallow(
				<Repository
					{...props}
					milestones={ [milestone] } />
			);
			expect(shallowToJson(view)).toMatchSnapshot();
		});
	});
});