jest.unmock('./Repository');

import * as React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Repository from './Repository';

describe('Respository template', () => {
	it('repository name when no other data', () => {
		const view = shallow(<Repository repo={ { repo: 'name', user: 'user' } } />);
		expect(shallowToJson(view)).toMatchSnapshot();
	});
});