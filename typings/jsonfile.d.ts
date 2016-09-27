declare module 'jsonfile' {
	namespace jsonfile {
		export function readFileSync<T>(path: string): T;
	}
	export = jsonfile;
}