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