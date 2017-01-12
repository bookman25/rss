import { app, Menu, Tray, BrowserWindow, ipcMain } from 'electron';
import { configChannel } from '../channels';
import { loadConfig } from '../config';
import { scheduleJob } from 'node-schedule';
import { sendEmail } from '../sendEmail';
import path = require('path');
import url = require('url');

let tray: Electron.Tray;
let mainWindow: Electron.BrowserWindow;
let config = loadConfig();
let isQuiting = false;
let job = null;
app.on('ready', () => {
	job = updateSchedule();
	ipcMain.on(configChannel, (_, updatedConfig) => {
		config = updatedConfig;
		job = updateSchedule();
	});
	if (config.repositories.length === 0) {
		editConfig();
	}
	buildTray();
});

function updateSchedule() {
	if (job) {
		job.cancel();
	}
	if (config.schedule) {
		return scheduleJob(config.schedule, () => sendEmail(config));
	}
}

function editConfig() {
	if (mainWindow) {
		mainWindow.show();
		return;
	}
	mainWindow = new BrowserWindow({ icon: path.resolve(__dirname, 'rss.ico') });
	mainWindow
		.on('closed', () => {
			mainWindow = null;
		})
		.on('close', event => {
			if (!isQuiting) {
				event.preventDefault();
				mainWindow.hide();
			}
		});

	mainWindow.loadURL(url.format({
		pathname: path.join(__dirname, 'index.html'),
		protocol: 'file:',
		slashes: true,
	}));
}

function buildTray() {
	tray = new Tray(path.resolve(__dirname, 'rss.ico'));
	const menu = Menu.buildFromTemplate([
		{
			label: 'Send Email',
			click: () => sendEmail(config),
		},
		{
			label: 'Edit Config',
			click: editConfig,
		},
		{
			label: 'Close',
			click: () => {
				isQuiting = true;
				app.quit();
			},
		},
	]);
	tray.on('double-click', editConfig);
	tray.setContextMenu(menu);
}

app.on('quit', () => {
	if (job) {
		job.cancel();
	}
});