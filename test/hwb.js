let tape = require('tape');
let culori = require('../');
let { hwb } = culori;

tape('hwb() parses hwb CSS strings', function(test) {
	test.deepEqual(
		hwb('hwb(100 0% 0%)'),
		{ h: 100, w: 0, b: 0, mode: 'hwb' },
		'black'
	);

	test.deepEqual(
		hwb('hwb(200 150% 150%)'),
		{ h: 200, w: 0.5, b: 0.5, mode: 'hwb' },
		'grey'
	);

	test.end();
});
