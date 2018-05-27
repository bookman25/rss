import * as React from 'react';
import { css, StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
	field: {
		margin: '5px 0',
	},
	label: {
		display: 'inline-block',
		width: '150px',
	},
});

export interface FieldProps {
	label: string;
}

interface IProps extends FieldProps {
	children: React.ReactNode;
}

export function Field(props: IProps) {
	return (
		<div className={ css(styles.field) }>
			<span className={ css(styles.label) }>{ props.label }:</span>
			{ props.children }
		</div>
	);
}
