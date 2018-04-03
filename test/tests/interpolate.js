let tape = require('tape');
let culori = require('../../');
let { interpolate, css } = culori;

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
	test.equal(css(interpolator(0.0)), 'rgb(255, 255, 255)');
	test.equal(css(interpolator(0.1)), 'rgba(230, 230, 230, 0.9)');
	test.equal(css(interpolator(0.2)), 'rgba(204, 204, 204, 0.8)');
	test.equal(css(interpolator(0.3)), 'rgba(179, 179, 179, 0.7)');
	test.equal(css(interpolator(0.4)), 'rgba(153, 153, 153, 0.6)');
	test.equal(css(interpolator(0.5)), 'rgba(128, 128, 128, 0.5)');
	test.equal(css(interpolator(0.6)), 'rgba(102, 102, 102, 0.4)');
	test.equal(css(interpolator(0.7)), 'rgba(77, 77, 77, 0.3)');
	test.equal(css(interpolator(0.8)), 'rgba(51, 51, 51, 0.2)');
	test.equal(css(interpolator(0.9)), 'rgba(25, 25, 25, 0.1)');
	test.equal(css(interpolator(1.0)), 'rgba(0, 0, 0, 0)');
	test.end();
});