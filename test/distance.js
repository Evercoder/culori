let tape = require('tape');
let culori = require('../');
let { distance, rgb, lab } = culori;

tape('euclidean distance in RGB', function(test) {

	let delta = distance('euclidean');

	test.equal(
		delta(
			rgb({ r: 1, g: 0, b: 0, alpha: 0.5 }),
			rgb({ r: 0, g: 1, b: 0, alpha: 0.75 })
		),
		1.4142135623730951
	)

	test.end();
});

tape('cie76 distance', function(test) {

	let delta = distance('cie76');

	test.equal(
		delta(
			lab({ l: 1, a: 0, b: 0, alpha: 0.5 }),
			lab({ l: 0, a: 1, b: 0, alpha: 0.75 })
		),
		1.4142135623730951
	)

	test.end();
});

tape('cie94 distance', function(test) {

	let delta = distance('cie94');

	test.equal(
		delta(
			lab({ l: 1, a: 0, b: 0, alpha: 0.5 }),
			lab({ l: 0, a: 1, b: 0, alpha: 0.75 })
		),
		1.4142135603514716
	)

	test.end();
});