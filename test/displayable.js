let tape = require('tape');
let culori = require('../');

tape('RGB', function(test) {
	test.equal(culori.displayable({ mode: 'rgb', r: 0, g: 0, b: 0 }), true);

	test.equal(
		culori.displayable({ mode: 'rgb', r: 1, g: 1, b: 1, alpha: 0.5 }),
		true
	);

	test.equal(
		culori.displayable({ mode: 'rgb', r: 1.1, g: 1, b: 1, alpha: 0.5 }),
		false
	);

	test.end();
});

tape('LCh', function(test) {
	test.equal(culori.displayable('lch(50 0 0)'), true);

	test.equal(culori.displayable('lch(50 -100 0)'), true);

	test.equal(culori.displayable('lch(120 -100 0)'), false);

	test.end();
});
