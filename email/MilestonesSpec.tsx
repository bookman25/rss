jest.unmock('./Milestones');

import * as React from 'react';
import { Milestones, IMilestone } from './Milestones';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

describe('Milestones', () => {
	const milestone1: IMilestone = {
		title: 'Milestone 1',
		html_url: 'url',
		open_issues: 1,
	};

	it('with no milestones', () => {
		const view = shallow(<Milestones milestones={ [] } />);
		expect(view.type()).toBeNull();
	});

	it('multiple milestones', () => {
		const milestones: IMilestone[] = [
			milestone1,
			Object.assign({}, milestone1, {
				title: 'Milestone 2',
				html_url: 'url2',
			}),
		];
		const view = shallow(<Milestones milestones={ milestones } />);
		expect(shallowToJson(view)).toMatchSnapshot();
	});

	it('without due date', () => {
		const view = shallow(<Milestones milestones={ [milestone1] } />);
		expect(shallowToJson(view)).toMatchSnapshot();
	});

	it('with due date', () => {
		const milestone = Object.assign({}, milestone1, {
			due_on: 'due date',
		});
		const view = shallow(<Milestones milestones={ [milestone] } />);
		expect(shallowToJson(view)).toMatchSnapshot();
	});
});