import buble from 'rollup-plugin-buble';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

export default [

	// UMD, minified
	{
		input: "src/index.js",
		output: {
			file: pkg.main,
			format: 'umd',
			name: 'culori',
		},
		plugins: [ 
			buble({ objectAssign: 'Object.assign' }), 
			terser() 
		]
	},

	// ES6 modules
	{
		input: 'src/index.js',
		output: {
			file: pkg.module,
			format: 'es'
		},
		plugins: [ 
			buble({ objectAssign: 'Object.assign' })
		]
	}
];