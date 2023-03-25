import { build } from 'esbuild';
import { writeFile } from 'node:fs/promises';

const builds = [];

// Bundled CJS
builds.push(
	build({
		entryPoints: ['./src/index.js'],
		logLevel: 'info',
		bundle: true,
		format: 'cjs',
		outfile: 'bundled/culori.cjs'
	})
);

// Bundled CJS, minified
builds.push(
	build({
		entryPoints: ['./src/index.js'],
		logLevel: 'info',
		bundle: true,
		minify: true,
		format: 'cjs',
		outfile: 'bundled/culori.min.cjs'
	})
);

// Bundled ESM
builds.push(
	build({
		entryPoints: ['./src/index.js'],
		logLevel: 'info',
		bundle: true,
		format: 'esm',
		metafile: true,
		outfile: 'bundled/culori.mjs'
	}).then(result => {
		writeFile(
			'bundled/meta.json',
			JSON.stringify(result.metafile, null, 2)
		);
	})
);

// Bundled ESM, minified
builds.push(
	build({
		entryPoints: ['./src/index.js'],
		logLevel: 'info',
		bundle: true,
		minify: true,
		format: 'esm',
		outfile: 'bundled/culori.min.mjs'
	})
);

// Bundled IIFE
builds.push(
	build({
		entryPoints: ['./src/index.js'],
		logLevel: 'info',
		bundle: true,
		format: 'iife',
		globalName: 'culori',
		outfile: 'bundled/culori.js'
	})
);

// Bundled IIFE, minified
builds.push(
	build({
		entryPoints: ['./src/index.js'],
		logLevel: 'info',
		bundle: true,
		minify: true,
		format: 'iife',
		globalName: 'culori',
		outfile: 'bundled/culori.min.js'
	})
);

// Bundled UMD
// Adapted from: https://github.com/umdjs/umd/blob/master/templates/returnExports.js
builds.push(
	build({
		entryPoints: ['./src/index.js'],
		logLevel: 'info',
		bundle: true,
		format: 'iife',
		globalName: 'culori',
		banner: {
			js: `(function(root, factory) {
				if (typeof define === 'function' && define.amd) {
					define([], factory);
				} else if (typeof module === 'object' && module.exports) {
					module.exports = factory();
				} else {
					root.culori = factory();
				}
			}
			(typeof self !== 'undefined' ? self : this, function() {`
		},
		footer: { js: `return culori; }));` },
		outfile: 'bundled/culori.umd.js'
	})
);

await Promise.all(builds);
