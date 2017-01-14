import * as React from 'react';
import { configChannel } from './channels';
import { css, StyleSheet } from 'aphrodite';
import { Fieldset } from './Fieldset';
import { IConfig } from '../config';
import { Input } from './Input';
import { ipcRenderer } from 'electron';
import { loadConfig, saveConfig } from '../config';
import { render } from 'react-dom';
import { Repositories } from './Repositories';
import { Smtp } from './Smtp';

const styles = StyleSheet.create({
	button: {
		marginTop: '10px',
	},
});

class ConfigPage extends React.Component<{}, Partial<IConfig>> {
	public state = loadConfig();

	public render() {
		return (
			<div>
				<Fieldset label='Misc'>
					<Input
						label='To'
						placeholder='Recipient'
						value={ this.state.to }
						updateValue={ to => this.setState({ to }) } />
					<Input
						label='Token'
						placeholder='github api token'
						type='password'
						value={ this.state.token }
						updateValue={ token => this.setState({ token }) } />
					<Input
						label='Schedule'
						placeholder='* 7 * * *'
						value={ this.state.schedule }
						updateValue={ schedule => this.setState({ schedule }) } />
				</Fieldset>
				<Smtp
					smtpSettings={ this.state.smtpSettings }
					updateSmtp={ smtpSettings => this.setState({ smtpSettings }) } />
				<Repositories
					repositories={ this.state.repositories }
					updateRepos={ repositories => this.setState({ repositories }) } />
				<button
					className={ css(styles.button) }
					onClick={ this.save }>Save</button>
			</div>
		);
	}

	private save = () => {
		saveConfig(this.state);
		ipcRenderer.send(configChannel, this.state);
	}
}

render(<ConfigPage />, document.getElementById('host'));