jest.unmock('./Releases');

import * as React from 'react';
import { Releases } from './Releases';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

describe('Releases', () => {
	it('with no releases', () => {
		const view = shallow(<Releases releases={ [] } />);
		expect(view.type()).toBeNull();
	});

	it('with a release name', () => {
		const view = shallow(<Releases releases={ [{ name: 'name', html_url: 'url' }] } />);
		expect(shallowToJson(view)).toMatchSnapshot();
	});
	it('without a release name and only a tag', () => {
		const view = shallow(<Releases releases={ [{ tag_name: 'name', html_url: 'url' }] } />);
		expect(shallowToJson(view)).toMatchSnapshot();
	});
});