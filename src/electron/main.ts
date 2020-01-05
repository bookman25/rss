import { app, BrowserWindow, ipcMain } from 'electron';
import { configChannel } from './channels';
import { loadConfig } from './config';
import { loadTray } from './loadTray';
import { scheduleJob } from 'node-schedule';
import { sendEmail } from '../email/sendEmail';
import path from 'path';
import url from 'url';

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
	loadTray(editConfig, send, () => {
		isQuiting = true;
		app.quit();
	});
});

app.on('quit', () => {
	if (job) {
		job.cancel();
	}
});

app.on('before-quit', () => isQuiting = true);

function updateSchedule() {
	if (job) {
		job.cancel();
	}
	if (config.schedule) {
		return scheduleJob(config.schedule, send);
	}
}

function send() {
	sendEmail(config);
}

function editConfig() {
	if (mainWindow) {
		mainWindow.show();
		app.dock.show();
		return;
	}
	mainWindow = new BrowserWindow({ 
		icon: path.resolve(__dirname, 'rss.ico'),
		webPreferences: {
			nodeIntegration: true,
		},
	});
	mainWindow.setMenuBarVisibility(false);
	mainWindow.autoHideMenuBar = true;
	mainWindow
		.on('closed', () => {
			mainWindow = null;
		});
	mainWindow
		.on('close', event => {
			if (!isQuiting) {
				event.preventDefault();
				mainWindow.hide();
				app.dock.hide();
			}
		});

	mainWindow.loadURL(url.format({
		pathname: path.join(__dirname, 'index.html'),
		protocol: 'file:',
		slashes: true,
	}));
}