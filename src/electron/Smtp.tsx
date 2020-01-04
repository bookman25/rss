import * as React from 'react';
import { Fieldset } from './Fieldset';
import { Input } from './Fields';
import { ISmtp } from './config';

interface IProps {
	smtpSettings: ISmtp;
	updateSmtp(options: ISmtp): void;
}

export function Smtp({ smtpSettings, updateSmtp}: IProps) {
	return (
		<Fieldset label='Smtp Settings'>
			<Input
				label='Host'
				value={ smtpSettings.host }
				updateValue={ host => updateSmtp({ ...smtpSettings, host }) } />
			<Input
				label='Port'
				value={ (smtpSettings.port || '').toString() }
				updateValue={ port => updateSmtp({ ...smtpSettings, port: parseInt(port, 10) }) } />
			<Input
				label='User'
				value={ smtpSettings.user }
				updateValue={ user => updateSmtp({ ...smtpSettings, user }) } />
			<Input
				label='Password'
				type='password'
				value={ smtpSettings.password }
				updateValue={ password => updateSmtp({ ...smtpSettings, password }) } />
		</Fieldset>
	);
}