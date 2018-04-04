let tape = require('tape');
let culori = require('../../');
let { interpolate, css, rgb, samples, hsv } = culori;

let hex = css('hex');

tape('interpolate between black and white in RGB', function(test) {
	let grays = interpolate(['#fff', '#000']);
	test.equal(hex(grays(0.0)), '#ffffff');
	test.equal(hex(grays(0.1)), '#e6e6e6');
	test.equal(hex(grays(0.2)), '#cccccc');
	test.equal(hex(grays(0.3)), '#b3b3b3');
	test.equal(hex(grays(0.4)), '#999999');
	test.equal(hex(grays(0.5)), '#808080');
	test.equal(hex(grays(0.6)), '#666666');
	test.equal(hex(grays(0.7)), '#4d4d4d');
	test.equal(hex(grays(0.8)), '#333333');
	test.equal(hex(grays(0.9)), '#191919');
	test.equal(hex(grays(1.0)), '#000000');
	test.end();
});

tape('interpolate between black and white in RGBA', function(test) {
	let grays = interpolate(['#ffff', '#0000']);
	test.deepEqual(rgb(grays(0.0)), { r: 1, g: 1, b: 1, alpha: 1, mode: 'rgb' });
	test.deepEqual(rgb(grays(0.1)), { r: 0.9, g: 0.9, b: 0.9, alpha: 0.9, mode: 'rgb' });
	test.deepEqual(rgb(grays(0.2)), { r: 0.8, g: 0.8, b: 0.8, alpha: 0.8, mode: 'rgb' });
	test.deepEqual(rgb(grays(0.3)), { r: 0.7, g: 0.7, b: 0.7, alpha: 0.7, mode: 'rgb' });
	test.deepEqual(rgb(grays(0.4)), { r: 0.6, g: 0.6, b: 0.6, alpha: 0.6, mode: 'rgb' });
	test.deepEqual(rgb(grays(0.5)), { r: 0.5, g: 0.5, b: 0.5, alpha: 0.5, mode: 'rgb' });
	test.deepEqual(rgb(grays(0.6)), { r: 0.4, g: 0.4, b: 0.4, alpha: 0.4, mode: 'rgb' });
	test.deepEqual(rgb(grays(0.7)), { r: 0.30000000000000004, g: 0.30000000000000004, b: 0.30000000000000004, alpha: 0.30000000000000004, mode: 'rgb' });
	test.deepEqual(rgb(grays(0.8)), { r: 0.19999999999999996, g: 0.19999999999999996, b: 0.19999999999999996, alpha: 0.19999999999999996, mode: 'rgb' });
	test.deepEqual(rgb(grays(0.9)), { r: 0.09999999999999998, g: 0.09999999999999998, b: 0.09999999999999998, alpha: 0.09999999999999998, mode: 'rgb' });
	test.deepEqual(rgb(grays(1.0)), { r: 0, g: 0, b: 0, alpha: 0, mode: 'rgb' });
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
		samples(4).map(interpolate(['blue', 'white'], 'hsv')).map(css('hex')),
		[ '#0000ff', '#5555ff', '#aaaaff', '#ffffff' ]);
	test.end();
})