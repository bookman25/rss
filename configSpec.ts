jest.unmock('./config')
	.mock('fs');

import * as fs from 'fs';
import { loadConfig } from './config';

describe('config', () => {
	const mockExists = fs.existsSync as jest.Mock<any>;
	const mockMkdir = fs.mkdirSync as jest.Mock<any>;
	const mockReadFile = fs.readFileSync as jest.Mock<any>;
	const mockWriteFile = fs.writeFileSync as jest.Mock<any>;

	beforeEach(() => {
		jest.resetAllMocks();
		mockReadFile.mockReturnValue(null);
	});

	it('should attempt to create directory if not exists', () => {
		loadConfig();
		expect(mockMkdir).toBeCalled();
	});

	it('should not attempt to create directory if exists', () => {
		mockExists.mockReturnValue(true);
		loadConfig();
		expect(mockMkdir).not.toBeCalled();
	});

	it('should not write config if exists', () => {
		mockExists.mockReturnValue(true);
		loadConfig();
		expect(mockWriteFile).not.toBeCalled();
	});

	it('should attempt to save config if not exists', () => {
		loadConfig();
		expect(mockWriteFile).toBeCalled();
	});
});