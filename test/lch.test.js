import tape from 'tape';
import { lch } from '../src/index';

tape('lch', t => {
	t.deepEqual(lch('white'), { mode: 'lch', l: 100, c: 0 }, 'white');
	t.deepEqual(
		lch('#111'),
		{ mode: 'lch', l: 5.063329493432597, c: 0 },
		'#111'
	);
	t.deepEqual(lch('black'), { mode: 'lch', l: 0, c: 0 }, 'black');
	t.deepEqual(
		lch('red'),
		{
			mode: 'lch',
			l: 54.29173376861782,
			c: 106.83899941284552,
			h: 40.85261277607024
		},
		'red'
	);
	t.end();
});
