jest.unmock('./Repository');

import * as React from 'react';
import { Repository } from './Repository';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

describe('Respository template', () => {
	it('repository name when no other data', () => {
		const view = shallow(<Repository repo={ { repo: 'name', user: 'user' } } />);
		expect(shallowToJson(view)).toMatchSnapshot();
	});
});