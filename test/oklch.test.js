import tape from 'tape';
import { oklch } from '../src/index';

tape('oklch', t => {
	t.deepEqual(
		oklch('white'),
		{ mode: 'oklch', l: 0.9999882345920056, c: 0 },
		'white'
	);
	t.deepEqual(
		oklch('#111'),
		{ mode: 'oklch', l: 0.17763568309569516, c: 0 },
		'#111'
	);
	t.deepEqual(oklch('black'), { mode: 'oklch', l: 0, c: 0 }, 'black');
	t.deepEqual(
		oklch('red'),
		{
			mode: 'oklch',
			l: 0.6279151939969809,
			c: 0.2576971582799852,
			h: 29.22109743427473
		},
		'red'
	);
	t.end();
});
