import * as React from 'react';
import { css, StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
	label: {
		display: 'inline-block',
		width: '100px',
	},
});

interface IProps {
	label: string;
	value: string;
	updateValue(value: string): void;
	placeholder?: string;
	type?: string;
}

export function Input(props: IProps) {
	return (
		<div>
			<span className={ css(styles.label) }>{ props.label }:</span>
			<input
				type={ props.type }
				placeholder={ props.placeholder }
				onChange={ e => props.updateValue(e.currentTarget.value) }
				value={ props.value } />
		</div>
	);
}