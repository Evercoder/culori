import buble from 'rollup-plugin-buble';
import uglify from 'rollup-plugin-uglify';
import pkg from './package.json';

export default [

	// UMD, minified
	{
		input: "./src/umd.js",
		output: {
			file: pkg.main,
			format: 'umd',
			name: 'culori',
		},
		plugins: [ 
			buble({ objectAssign: 'Object.assign' }), 
			uglify() 
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