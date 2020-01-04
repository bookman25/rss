import * as React from 'react';
import { css, StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
	fieldet: {
		display: 'inline-block',
	},
});

export function Fieldset({ label, children }: { label: string; children?: React.ReactNode }) {
	return (
		<div>
			<fieldset className={ css(styles.fieldet) }>
				<legend>{ label }</legend>
				{ children }
			</fieldset>
		</div>
	);
}