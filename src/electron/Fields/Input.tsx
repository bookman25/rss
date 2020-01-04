import * as React from 'react';
import { Field, FieldProps } from './Field';

interface IProps extends FieldProps {
	value: string;
	updateValue(value: string): void;
	placeholder?: string;
	type?: string;
}

export function Input(props: IProps) {
	return (
		<Field label={ props.label }>
			<input
				type={ props.type }
				placeholder={ props.placeholder }
				onChange={ e => props.updateValue(e.currentTarget.value) }
				value={ props.value } />
		</Field>
	);
}