import { Menu, Tray, nativeImage } from 'electron';
import path from 'path';

let tray: Electron.Tray;
export function loadTray(editConfig: () => void, sendEmail: () => void, quit: () => void) {
	const image = nativeImage.createFromPath(path.resolve(__dirname, 'rss.png'));
	tray = new Tray(image);
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