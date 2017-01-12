const uncaughtExceptionHandler = onError.bind(null, 'Uncaught Exception');
const uncaughtRejectionHandler = onError.bind(null, 'Unhandled Promise Rejection');

function onError(type, err) {
	console.log(type);
	if (err.stack) {
		err.stack.split('\n').forEach(line => {
			console.log(line);
		});
	} else {
		console.log(err.name + ": " + err.message || err.reason);
	}
	throw err;
}

if (process.listenerCount('uncaughtException') === 0) {
	process.on('uncaughtException', uncaughtExceptionHandler);
}

if (process.listenerCount('unhandledRejection') === 0) {
	process.on('unhandledRejection', uncaughtRejectionHandler);
}

global.console.log = catchLoggedWarningsAndThrow.bind(global.console, global.console.log);
global.console.warn = catchLoggedWarningsAndThrow.bind(global.console, global.console.warn);
global.console.error = catchLoggedWarningsAndThrow.bind(global.console, global.console.error);

function catchLoggedWarningsAndThrow(originalLog) {
	var message = arguments[1];
	if (typeof message === 'string' && message.toLowerCase().indexOf('warning') > -1) {
		throw new Error("Clean up warnings! Original message: " + message);
	}
	originalLog.apply(this, Array.from(arguments).slice(1));
}