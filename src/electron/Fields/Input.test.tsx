jest.unmock('./Input');

import * as React from 'react';
import { Input } from './Input';
import { shallow } from 'enzyme';

const updateValue = jest.fn();
type Props = React.ComponentProps<typeof Input>;
const props: Props = {
	label: 'Field',
	value: '',
	updateValue,
};

it('should update the value on change', () => {
	const view = shallow(<Input {...props}/>);
	const newValue = 'test';
	view.find('input').props().onChange({ currentTarget: { value: newValue }} as React.ChangeEvent<HTMLInputElement>);
	expect(updateValue).toBeCalledWith(newValue);
});
