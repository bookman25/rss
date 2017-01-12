const { app, Menu, Tray } = require('electron');
const { sendEmail, job } = require('./index');
const path = require('path');

let tray = null;
app.on('ready', () => {
	tray = new Tray(path.resolve(__dirname, 'rss.ico'));
	const menu = Menu.buildFromTemplate([
		{
			label: 'Send Email',
			click: sendEmail
		},
		{
			label: 'Close',
			click: app.quit
		}
	]);
	tray.setContextMenu(menu);
});

app.on('quit', () => {
	job.cancel();
});