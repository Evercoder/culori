import { spawnSync } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as fs from 'node:fs';

import * as Diff from 'diff';
import pico from 'picocolors';

const __dirname = dirname(fileURLToPath(import.meta.url));

const PATH_TO_SNAPSHOT = join(__dirname, '__snapshot.snap');

function runTsc() {
	return spawnSync(
		'npx',
		['-p', 'typescript', 'tsc', '--project', './test-tsconfig.json'],
		{
			cwd: __dirname
		}
	);
}

if (process.argv.some(arg => arg === '--updateSnapshot')) {
	const tsc = runTsc();
	const snap = fs.createWriteStream(PATH_TO_SNAPSHOT);
	snap.write(tsc.stdout);
	snap.end();
} else if (process.argv.some(arg => arg === '--check')) {
	const tsc = runTsc();
	const actual = tsc.stdout.toString();
	const expected = fs.readFileSync(PATH_TO_SNAPSHOT).toString();

	let changed = false;
	const diff = Diff.diffChars(actual, expected);
	diff.forEach(part => {
		if (part.added || part.removed) {
			changed = true;
		}
		const color = part.added ? 'green' : part.removed ? 'red' : 'gray';
		process.stderr.write(pico[color](part.value));
	});
	if (changed) {
		process.exit(1);
	} else {
		process.exit(0);
	}
} else {
	console.log('Short help:');
	console.log("	pass '--check' parameter to check types");
	console.log("	pass '--updateSnapshot' parameter to update snapshots");
}
