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
	globalName: 'culori',
	outfile: 'bundled/culori.js'
});

task({
	format: 'iife',
	globalName: 'culori',
	minify: true,
	outfile: 'bundled/culori.min.js'
});

/*
	Packs
 */

task({
	format: 'esm',
	entryPoints: ['src/index-css.js'],
	outfile: 'bundled/culori-css.mjs'
});

task({
	format: 'esm',
	entryPoints: ['src/index-css.js'],
	minify: true,
	outfile: 'bundled/culori-css.min.mjs'
});

/*
  Bundled IIFE, unminified / minified.
 */

task({
	format: 'iife',
	globalName: 'culori',
	entryPoints: ['src/index-fn.js'],
	outfile: 'bundled/culori-fn.js'
});

task({
	format: 'iife',
	globalName: 'culori',
	entryPoints: ['src/index-fn.js'],
	minify: true,
	outfile: 'bundled/culori-fn.min.js'
});
