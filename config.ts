import { IRepositoryConfig } from 'query';
import fs = require('fs');
import path = require('path');
import * as electron from 'electron'

export interface ISmtp {
	host: string;
	port: number;
	user: string;
	password: string;
}

export interface IConfig {
	to: string;
	smtpSettings: ISmtp;
	token: string;
	schedule: string;
	repositories: IRepositoryConfig[];
	showNotifications: boolean;
}

const defaultConfig: IConfig = {
	to: '',
	token: '',
	smtpSettings: {
		host: '',
		port: null,
		user: '',
		password: '',
	},
	repositories: [],
	schedule: '',
	showNotifications: true,
};

const userHome = (electron.app || electron.remote.app).getPath("userData");
const appData = path.join(userHome, 'github-feed');
const configFile = path.join(appData, 'config.json');
export function loadConfig(): IConfig {
	if (!fs.existsSync(appData)) {
		fs.mkdirSync(appData);
	}
	if (!fs.existsSync(configFile)) {
		saveConfig(defaultConfig);
	}
	return {
		...defaultConfig,
		...JSON.parse(fs.readFileSync(configFile, 'utf-8')),
	};
}

export function saveConfig(config: IConfig) {
	fs.writeFileSync(configFile, JSON.stringify(config));
}