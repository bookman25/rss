declare namespace NodeJS {
	interface ReadableStream {
		setRawMode(rawMode: boolean): void;
	}
}