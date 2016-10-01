import * as yargs from 'yargs';

declare module 'yargs' {
	interface Argv {
		coerce(key: string, parse: (path: string) => Object): Argv;
	}
}