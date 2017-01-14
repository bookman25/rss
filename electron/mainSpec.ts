jest.unmock('./main');

import { app } from 'electron';
import { loadConfig } from '../config';

describe('main', () => {
	const mockLoadConfig = loadConfig as jest.Mock<any>;

	beforeEach(() => {
		jest.resetAllMocks();
		mockLoadConfig.mockReturnValue({
			repositories: [],
		});
	});

	it('should load', () => {
		app.on = jest.fn((_, l) => l());
		require('./main');
	});
});