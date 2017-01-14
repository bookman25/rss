const { exec } = require('child_process');
const fs = require('fs');

exec('git ls-files -o --exclude=node_modules/**', (err, stdout) => {
	stdout.split(/\r?\n/)
		.forEach(file => {
			if (fs.existsSync(file)) {
				fs.unlinkSync(file);
				console.log('Removed: ' + file);
			}
		});
});