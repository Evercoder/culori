import buble from '@rollup/plugin-buble';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

export default [
	// IIFE, minified
	{
		input: pkg.source,
		output: {
			file: pkg.unpkg,
			format: 'iife',
			name: 'culori'
		},
		plugins: [buble({ objectAssign: 'Object.assign' }), terser()]
	},

	// CJS
	{
		input: pkg.source,
		output: {
			file: pkg.main,
			format: 'cjs'
		},
		plugins: [buble({ objectAssign: 'Object.assign' })]
	},

	// ES6 modules
	{
		input: pkg.source,
		output: {
			file: pkg.module,
			format: 'es'
		},
		plugins: [buble({ objectAssign: 'Object.assign' })]
	}
];
