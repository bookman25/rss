jest.unmock('./ConfigPage');

import * as React from 'react';
import { ConfigPage } from './ConfigPage';
import { Input } from './Fields';
import { ipcRenderer } from 'electron';
import { ISmtp, loadConfig, saveConfig } from './config';
import { shallow, ShallowWrapper } from 'enzyme';
import { Smtp } from './Smtp';

describe('ConfigPage', () => {
	const mockLoadConfig = loadConfig as jest.Mock<any>;
	let view: ShallowWrapper<{}, {}>;

	beforeEach(() => {
		jest.resetAllMocks();
		mockLoadConfig.mockReturnValue({});
		view = shallow(<ConfigPage />);
	});

	it('should update the recipient on change', () => {
		const to = 'to';
		findInputByLabel('To').updateValue(to);
		validateSave({ to });
	});

	it('should update the token on change', () => {
		const token = 'token';
		findInputByLabel('Token').updateValue(token);
		validateSave({ token });
	});

	it('should update the schedule on change', () => {
		const schedule = 'schedule';
		findInputByLabel('Schedule').updateValue(schedule);
		validateSave({ schedule });
	});

	it('should update the smtpSettings on change', () => {
		const smtpSettings: ISmtp = {
			host: 'host',
			port: 1,
			user: 'user',
			password: 'pass',
		};
		view.find(Smtp).props().updateSmtp(smtpSettings);
		validateSave({ smtpSettings });
	});

	it('should send a message on save', () => {
		validateSave({});
		expect(ipcRenderer.send).toBeCalled();
	});

	function findInputByLabel(label: string) {
		return view.find(Input)
			.filterWhere(c => c.props().label === label)
			.props();
	}

	function validateSave(config: any) {
		view.find('button').simulate('click');
		expect(saveConfig).toBeCalledWith(config);
	}
});