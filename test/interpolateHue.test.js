let tape = require('tape');
let culori = require('../');
let { interpolateHue, formatter } = culori;

tape('interpolate/hue', function(test) {
	test.deepEqual(interpolateHue([0, 360]), [0, 0], '[0, 360]');

	test.deepEqual(interpolateHue([360, 0]), [0, 0], '[360, 0]');

	test.deepEqual(interpolateHue([350, 0]), [350, 360]);

	test.deepEqual(interpolateHue([0, 350]), [0, -10]);
	test.end();
});
