declare module 'sendmail' {
	function sendmail(options?): (options: sendmail.Options) => void;

	namespace sendmail {
		export interface Options {
			from?: string;
			to?: string;
			subject?: string;
			html?: string;
		}
	}

	export = sendmail;
}