import { spawn } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as fs from 'node:fs';
import { tmpdir } from 'node:os';
import { randomUUID } from 'node:crypto';

import * as Diff from 'diff';
import pico from 'picocolors';

const __dirname = dirname(fileURLToPath(import.meta.url));

const PATH_TO_SNAPSHOT = join(__dirname, '__snapshot.snap');

const tsc = spawn(
	'npx',
	[
		'-p',
		'typescript',
		'tsc',
		'--project',
		'./test-tsconfig.json',
		'--rootDir',
		__dirname,
		'--pretty',
		false
	],
	{
		cwd: __dirname
	}
);

if (process.argv.some(arg => arg === '--updateSnapshot')) {
	tsc.stdout.pipe(fs.createWriteStream(PATH_TO_SNAPSHOT));
} else {
	const pathToTmpSnap = join(tmpdir(), randomUUID());
	tsc.stdout.pipe(fs.createWriteStream(pathToTmpSnap));

	tsc.stdout.once('end', () => {
		let actual = fs.readFileSync(pathToTmpSnap);
		let expected = fs.readFileSync(PATH_TO_SNAPSHOT);

		const diff = Diff.diffChars(actual.toString(), expected.toString());

		diff.forEach(part => {
			// green for additions, red for deletions
			// grey for common parts
			const color = part.added ? 'green' : part.removed ? 'red' : 'gray';
			process.stderr.write(pico[color](part.value));
		});
	});
}
