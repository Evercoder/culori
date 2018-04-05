const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const uglify = require('rollup-plugin-uglify');

const babel_configuration = () => babel({
	babelrc: false,
	presets: ["es2015-rollup"],
	plugins: ["transform-object-rest-spread"]
});
const bundles = [

	// UMD
	{
		input: "./scripts/umd.js",
		output: {
			file: 'build/culori.js',
			format: 'umd',
			name: 'culori',
		},
		plugins: [ babel_configuration() ]
	},

	// UMD, minified
	{
		input: "./scripts/umd.js",
		output: {
			file: 'build/culori.min.js',
			format: 'umd',
			name: 'culori',
		},
		plugins: [ babel_configuration(), uglify() ]
	},

	// ES6 modules
	{
		input: 'src/index.js',
		output: {
			file: 'build/index.js',
			format: 'es'
		},
		plugins: [ babel_configuration() ]
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


