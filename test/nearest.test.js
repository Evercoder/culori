import tape from 'tape';
import { nearest, colorsNamed } from '../src/index.js';

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

tape('nearest() with accessor', t => {
	let palette = {
		Burgundy: '#914e72',
		Blue: '#0078bf',
		Green: '#00a95c',
		'Medium Blue': '#3255a4',
		'Bright Red': '#f15060'
	};
	let names = Object.keys(palette);
	let nearestColors = nearest(names, undefined, name => palette[name]);
	t.deepEqual(nearestColors('red', 1), ['Bright Red']);
	t.end();
});
