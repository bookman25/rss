jest.unmock('./Commit');

import * as React from 'react';
import { Commit } from './Commit';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

describe('Commit', () => {
	it('renders with data', () => {
		const view = shallow(<Commit committer={ { date: 'commit date' } } message='message' />);
		expect(shallowToJson(view)).toMatchSnapshot();
	});
});