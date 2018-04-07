let tape = require('tape');
let culori = require('../');
let { formatter, hsl, rgb } = culori;

tape('formatter()', function(test) {
	test.deepEqual(
		formatter()(rgb('rgb(200, 300, 100)')),
		'rgb(200, 255, 100)',
		'rgb'
	);

	test.deepEqual(
		formatter()(rgb('rgba(200, 300, 100, 0.1)')),
		'rgba(200, 255, 100, 0.1)',
		'rgb'
	);

	test.end();
});

tape('formatter("hex")', function(test) {
	test.deepEqual(
		formatter('hex')(rgb('#c0c2ff')),
		'#c0c2ff',
		'#c0c2ff'
	);

	test.deepEqual(
		formatter('hex')(rgb('#00c2ff')),
		'#00c2ff',
		'#00c2ff'
	);

	test.end();
});