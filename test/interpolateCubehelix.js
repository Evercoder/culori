let tape = require('tape');
let culori = require('../');
let { interpolateCubehelix, formatter, samples } = culori;

let format = formatter('hex');

tape('interpolateCubehelix default parameters', function(test) {
	test.deepEqual(
		samples(10).map(interpolateCubehelix()).map(format), 
		['#000000', '#1a1935', '#15474e', '#2b6f39', '#767b33', '#c17a6f', '#d490c6', '#c3c0f2', '#ceebef', '#ffffff']
	);

	test.end();
});