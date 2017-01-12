import { IRepositoryConfig } from 'query';
import fs = require('fs');
import path = require('path');

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
};

const appData = path.join(process.env.APPDATA, 'github-feed');
const configFile = path.join(appData, 'config.json');
export function loadConfig(): IConfig {
	if (!fs.existsSync(appData)) {
		fs.mkdirSync(appData);
	}
	if (!fs.existsSync(configFile)) {
		saveConfig(defaultConfig);
	}
	return JSON.parse(fs.readFileSync(configFile, 'utf-8'));
}

export function saveConfig(config: IConfig) {
	fs.writeFileSync(configFile, JSON.stringify(config));
}