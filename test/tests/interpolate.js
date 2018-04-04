let tape = require('tape');
let culori = require('../../');
let { interpolate, css, rgb, swatches, hsv } = culori;

tape('interpolate between black and white in RGB', function(test) {
	let interpolator = interpolate(['#fff', '#000']);
	test.equal(css(interpolator(0.0), 'hex'), '#ffffff');
	test.equal(css(interpolator(0.1), 'hex'), '#e6e6e6');
	test.equal(css(interpolator(0.2), 'hex'), '#cccccc');
	test.equal(css(interpolator(0.3), 'hex'), '#b3b3b3');
	test.equal(css(interpolator(0.4), 'hex'), '#999999');
	test.equal(css(interpolator(0.5), 'hex'), '#808080');
	test.equal(css(interpolator(0.6), 'hex'), '#666666');
	test.equal(css(interpolator(0.7), 'hex'), '#4d4d4d');
	test.equal(css(interpolator(0.8), 'hex'), '#333333');
	test.equal(css(interpolator(0.9), 'hex'), '#191919');
	test.equal(css(interpolator(1.0), 'hex'), '#000000');
	test.end();
});

tape('interpolate between black and white in RGBA', function(test) {
	let interpolator = interpolate(['#ffff', '#0000']);
	test.deepEqual(rgb(interpolator(0.0)), { r: 1, g: 1, b: 1, alpha: 1, mode: 'rgb' });
	test.deepEqual(rgb(interpolator(0.1)), { r: 0.9, g: 0.9, b: 0.9, alpha: 0.9, mode: 'rgb' });
	test.deepEqual(rgb(interpolator(0.2)), { r: 0.8, g: 0.8, b: 0.8, alpha: 0.8, mode: 'rgb' });
	test.deepEqual(rgb(interpolator(0.3)), { r: 0.7, g: 0.7, b: 0.7, alpha: 0.7, mode: 'rgb' });
	test.deepEqual(rgb(interpolator(0.4)), { r: 0.6, g: 0.6, b: 0.6, alpha: 0.6, mode: 'rgb' });
	test.deepEqual(rgb(interpolator(0.5)), { r: 0.5, g: 0.5, b: 0.5, alpha: 0.5, mode: 'rgb' });
	test.deepEqual(rgb(interpolator(0.6)), { r: 0.4, g: 0.4, b: 0.4, alpha: 0.4, mode: 'rgb' });
	test.deepEqual(rgb(interpolator(0.7)), { r: 0.30000000000000004, g: 0.30000000000000004, b: 0.30000000000000004, alpha: 0.30000000000000004, mode: 'rgb' });
	test.deepEqual(rgb(interpolator(0.8)), { r: 0.19999999999999996, g: 0.19999999999999996, b: 0.19999999999999996, alpha: 0.19999999999999996, mode: 'rgb' });
	test.deepEqual(rgb(interpolator(0.9)), { r: 0.09999999999999998, g: 0.09999999999999998, b: 0.09999999999999998, alpha: 0.09999999999999998, mode: 'rgb' });
	test.deepEqual(rgb(interpolator(1.0)), { r: 0, g: 0, b: 0, alpha: 0, mode: 'rgb' });
	test.end();
});

tape('interpolate between black and white in RGB/RGBA', function(test) {
	let interpolator = interpolate(['#fff', '#0000']);
	test.deepEqual(rgb(interpolator(0.0)), { r: 1, g: 1, b: 1, mode: 'rgb' });
	test.deepEqual(rgb(interpolator(0.1)), { r: 0.9, g: 0.9, b: 0.9, alpha: 0.9, mode: 'rgb' });
	test.deepEqual(rgb(interpolator(0.2)), { r: 0.8, g: 0.8, b: 0.8, alpha: 0.8, mode: 'rgb' });
	test.deepEqual(rgb(interpolator(0.3)), { r: 0.7, g: 0.7, b: 0.7, alpha: 0.7, mode: 'rgb' });
	test.deepEqual(rgb(interpolator(0.4)), { r: 0.6, g: 0.6, b: 0.6, alpha: 0.6, mode: 'rgb' });
	test.deepEqual(rgb(interpolator(0.5)), { r: 0.5, g: 0.5, b: 0.5, alpha: 0.5, mode: 'rgb' });
	test.deepEqual(rgb(interpolator(0.6)), { r: 0.4, g: 0.4, b: 0.4, alpha: 0.4, mode: 'rgb' });
	test.deepEqual(rgb(interpolator(0.7)), { r: 0.30000000000000004, g: 0.30000000000000004, b: 0.30000000000000004, alpha: 0.30000000000000004, mode: 'rgb' });
	test.deepEqual(rgb(interpolator(0.8)), { r: 0.19999999999999996, g: 0.19999999999999996, b: 0.19999999999999996, alpha: 0.19999999999999996, mode: 'rgb' });
	test.deepEqual(rgb(interpolator(0.9)), { r: 0.09999999999999998, g: 0.09999999999999998, b: 0.09999999999999998, alpha: 0.09999999999999998, mode: 'rgb' });
	test.deepEqual(rgb(interpolator(1.0)), { r: 0, g: 0, b: 0, alpha: 0, mode: 'rgb' });
	test.end();
});

tape('bug checking', function(test) {
	test.deepEqual(
		swatches(
			interpolate(['blue', 'white'], 'hsv'), 
			4
		).map(v => css(v, 'hex')),
		[ '#0000ff', '#5555ff', '#aaaaff', '#ffffff' ]);
	test.end();
})