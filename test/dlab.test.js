import tape from 'tape';
import { dlab } from '../src/index';

tape('dlab', t => {
	t.deepEqual(
		dlab('white'),
		{ mode: 'dlab', l: 100.00000329450263, a: 0, b: 0 },
		'white'
	);

	// Tests that achromatic RGB colors get a = b = 0
	t.deepEqual(
		dlab('#111'),
		{ mode: 'dlab', l: 5.938148209426481, a: 0, b: 0 },
		'#111'
	);

	t.deepEqual(dlab('black'), { mode: 'dlab', l: 0, a: 0, b: 0 }, 'black');
	t.deepEqual(
		dlab('red'),
		{
			mode: 'dlab',
			l: 57.292786940734544,
			a: 39.49865108060835,
			b: 30.51816478216608
		},
		'red'
	);
	t.end();
});
