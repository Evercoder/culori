import tape from 'tape';
import { dlch } from '../src/index';

tape('dlch', t => {
	t.deepEqual(
		dlch('white'),
		{ mode: 'dlch', l: 100.00000329450263, c: 0 },
		'white'
	);
	t.deepEqual(
		dlch('#111'),
		{ mode: 'dlch', l: 5.938148209426481, c: 0 },
		'#111'
	);
	t.deepEqual(dlch('black'), { mode: 'dlch', l: 0, c: 0 }, 'black');
	t.deepEqual(
		dlch('red'),
		{
			mode: 'dlch',
			l: 57.292786940734544,
			c: 49.91494584650057,
			h: 37.691043152153014
		},
		'red'
	);
	t.end();
});
