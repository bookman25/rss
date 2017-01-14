import { Menu, Tray } from 'electron';
import path = require('path');

let tray: Electron.Tray;
export function loadTray(editConfig: () => void, sendEmail: () => void, quit: () => void) {
	tray = new Tray(path.resolve(__dirname, 'rss.ico'));
	const menu = Menu.buildFromTemplate([
		{
			label: 'Send Email',
			click: sendEmail,
		},
		{
			label: 'Edit Config',
			click: editConfig,
		},
		{
			label: 'Close',
			click: quit,
		},
	]);
	tray.on('double-click', editConfig);
	tray.setContextMenu(menu);
}