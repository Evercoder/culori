let tape = require('tape');
let culori = require('../../');
let { interpolate } = culori;

tape('caca', function(test) {
	test.equal(interpolate([0, 1])(0.5), 0.5);
	test.equal(interpolate([0, 1])(0.33), 0.33);
	test.equal(interpolate([0, 100])(0.33), 33.33);
	test.end();
});