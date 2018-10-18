let tape = require('tape');
let culori = require('../');
let { rgb, formatter } = culori;

tape('rgb(Specifier)', function(test) {
	test.deepEqual(formatter('hex')(rgb('#ffffff')), '#ffffff');

	test.deepEqual(
		rgb('tomato'),
		{ r: 1, g: 0.38823529411764707, b: 0.2784313725490196, mode: 'rgb' },
		'named color'
	);

	test.deepEqual(
		rgb('rgb(255, 0, 0)'),
		{ r: 1, g: 0, b: 0, mode: 'rgb' },
		'rgb()'
	);

	test.deepEqual(
		rgb('rgba(255, 0, 0)'),
		{ r: 1, g: 0, b: 0, mode: 'rgb' },
		'rgba()'
	);

	test.deepEqual(
		rgb('rgb(100%, 0%, 0%)'),
		{ r: 1, g: 0, b: 0, mode: 'rgb' },
		'rgb()'
	);

	test.deepEqual(
		rgb('rgba(100%, 0%, 0%)'),
		{ r: 1, g: 0, b: 0, mode: 'rgb' },
		'rgba()'
	);

	test.end();
});

tape('rgb(Object)', function(test) {
	test.deepEqual(
		rgb({ r: 1, g: 0, b: 0 }),
		{ r: 1, g: 0, b: 0, mode: 'rgb' },
		'red'
	);

	test.deepEqual(
		rgb({ r: 0.1, g: 0.2, b: 0.3, alpha: 0.4 }),
		{ r: 0.1, g: 0.2, b: 0.3, alpha: 0.4, mode: 'rgb' },
		'floating point'
	);

	test.end();
});
