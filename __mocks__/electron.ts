const BrowserWindow = jest.fn();
BrowserWindow.prototype.on = jest.fn();
BrowserWindow.prototype.loadURL = jest.fn();

const Tray = jest.fn();
Tray.prototype.on = jest.fn();
Tray.prototype.setContextMenu = jest.fn();

export = {
	app: {
		on: jest.fn(),
	},
	BrowserWindow,
	ipcRenderer: {
		send: jest.fn(),
	},
	ipcMain: {
		on: jest.fn(),
	},
	Menu: {
		buildFromTemplate: jest.fn(),
	},
	Tray,
};