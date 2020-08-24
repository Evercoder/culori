import tape from 'tape';
import { lch65 } from '../src/index';

tape('lch65', t => {
	t.deepEqual(
		lch65('white'),
		{ mode: 'lch65', l: 100.00000386666655, c: 0 },
		'white'
	);
	t.deepEqual(
		lch65('#111'),
		{ mode: 'lch65', l: 5.06332999976555, c: 0 },
		'#111'
	);
	t.deepEqual(lch65('black'), { mode: 'lch65', l: 0, c: 0 }, 'black');
	t.deepEqual(
		lch65('red'),
		{
			mode: 'lch65',
			l: 53.240794141307205,
			c: 104.55176567686988,
			h: 39.99901061253291
		},
		'red'
	);
	t.end();
});
