let tape = require('tape');
let culori = require('../');
let { nearest, colorsNamed } = culori;

let nearestNamedColor = nearest(Object.keys(colorsNamed));

tape('check against named colors', test => {
	test.deepEqual(
		nearestNamedColor('red'),
		['red'],
		'Closest named color to red'
	);

	test.deepEqual(
		nearestNamedColor('red', Infinity, 0.5),
		[
			'red',
			'orangered',
			'crimson',
			'firebrick',
			'brown',
			'darkred',
			'chocolate',
			'tomato',
			'maroon'
		],
		'Close named colors to red, d <= 0.5'
	);

	test.end();
});
