let tape = require('tape');
let culori = require('../../');
let { css, hsl, rgb } = culori;

tape('css()', function(test) {
	test.deepEqual(
		css(rgb('rgb(200, 255, 100)')),
		'rgb(200, 300, 100)',
		'rgb'
	);

	test.deepEqual(
		css(rgb('rgba(200, 255, 100, 0.1)')),
		'rgba(200, 300, 100, 0.1)',
		'rgb'
	);

	test.end();
});

tape('css("hex")', function(test) {
	test.deepEqual(
		css(rgb('#c0c2ff'), 'hex'),
		'#c0c2ff',
		'#c0c2ff'
	);

	test.deepEqual(
		css(rgb('#00c2ff'), 'hex'),
		'#00c2ff',
		'#00c2ff'
	);

	test.end();
});