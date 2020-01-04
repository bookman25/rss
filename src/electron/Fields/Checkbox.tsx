import * as React from 'react';
import { css, StyleSheet } from 'aphrodite';
import { Field, FieldProps } from './Field';

const styles = StyleSheet.create({
	checkbox: {
		margin: 0,
	},
});

interface IProps extends FieldProps {
	value: boolean;
	updateValue(value: boolean): void;
}

export function Checkbox(props: IProps) {
	return (
		<Field label={ props.label }>
			<input
				className={ css(styles.checkbox) }
				type='checkbox'
				onChange={ e => props.updateValue(e.currentTarget.checked) }
				checked={ props.value } />
		</Field>
	);
}