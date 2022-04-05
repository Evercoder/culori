import {
	readdirSync,
	mkdirSync,
	copyFileSync,
	rmdirSync,
	existsSync
} from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const SRC = join(__dirname, './src');
const TYPES = join(__dirname, './types');

if (existsSync(TYPES)) {
	rmdirSync(TYPES, { recursive: true });
}

mkdirSync(TYPES);

function copy(pathToDir) {
	const files = readdirSync(pathToDir, { withFileTypes: true });

	for (const f of files) {
		if (f.isDirectory()) {
			copy(join(pathToDir, f.name));
		} else if (f.isFile()) {
			if (/\.d\.ts$/.test(f.name) === false) {
				continue;
			}
			const src = join(pathToDir, f.name);
			const dest = src.replace('/src/', '/types/');
			const destDir = dirname(dest);
			if (existsSync(destDir) === false) {
				mkdirSync(destDir, { recursive: true });
			}
			copyFileSync(src, src.replace('/src/', '/types/'));
		} else {
			console.log('nothing was done with', f);
		}
	}
}

copy(SRC);
