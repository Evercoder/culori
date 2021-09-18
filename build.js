import { build } from 'esbuild';

function task(config) {
	return build({
		entryPoints: ['./src/index.js'],
		logLevel: 'info',
		bundle: true,
		...config
	});
}

/*
  Bundled CJS, unminified / minified.
 */

task({
	format: 'cjs',
	outfile: 'bundled/culori.cjs'
});

task({
	format: 'cjs',
	minify: true,
	outfile: 'bundled/culori.min.cjs'
});

/*
  Bundled ESM, unminified / minified.
 */

task({
	format: 'esm',
	outfile: 'bundled/culori.mjs'
});

task({
	format: 'esm',
	minify: true,
	outfile: 'bundled/culori.min.mjs'
});

/*
  Bundled IIFE, unminified / minified.
 */

task({
	format: 'iife',
	outfile: 'bundled/culori.js'
});

task({
	format: 'iife',
	minify: true,
	outfile: 'bundled/culori.min.js'
});

/*
	Packs
 */

task({
	format: 'esm',
	entryPoints: ['src/packs/core.js'],
	outfile: 'bundled/culori-core.mjs'
});

task({
	format: 'esm',
	entryPoints: ['src/packs/core.js'],
	minify: true,
	outfile: 'bundled/culori-core.min.mjs'
});

/*
  Bundled IIFE, unminified / minified.
 */

task({
	format: 'iife',
	entryPoints: ['src/packs/core.js'],
	outfile: 'bundled/culori-core.js'
});

task({
	format: 'iife',
	entryPoints: ['src/packs/core.js'],
	minify: true,
	outfile: 'bundled/culori-core.min.js'
});
