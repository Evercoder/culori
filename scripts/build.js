const rollup = require('rollup');
const buble = require('rollup-plugin-buble');
const uglify = require('rollup-plugin-uglify');

const bundles = [

	// UMD
	{
		input: "./scripts/umd.js",
		output: {
			file: 'build/culori.js',
			format: 'umd',
			name: 'culori',
		},
		plugins: [ buble({
			objectAssign: 'Object.assign'
		}) ]
	},

	// UMD, minified
	{
		input: "./scripts/umd.js",
		output: {
			file: 'build/culori.min.js',
			format: 'umd',
			name: 'culori',
		},
		plugins: [ buble({
			objectAssign: 'Object.assign'
		}), uglify() ]
	},

	// ES6 modules
	{
		input: 'src/index.js',
		output: {
			file: 'build/index.js',
			format: 'es'
		},
		plugins: [ buble({
			objectAssign: 'Object.assign'
		}) ]
	}

];

bundles.reduce(
	(promise, config) => 
		promise.then(() => 
			rollup.rollup(config).then(bundle => bundle.write(config.output))
		), 
	Promise.resolve()
).then(() => {
	console.log('🌈');
});


