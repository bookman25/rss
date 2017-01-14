jest.unmock('./loadTray');

import { loadTray } from './loadTray';
import { Tray } from 'electron';

describe('loadTray', () => {
	const mockEditConfig = jest.fn();
	const mockSendEmail = jest.fn();
	const mockQuit = jest.fn();

	it('should edit config on double-click', () => {
		Tray.prototype.on = jest.fn((_, callback) => callback());
		loadTray(mockEditConfig, mockSendEmail, mockQuit);
		expect(mockEditConfig).toBeCalled();
	});
});