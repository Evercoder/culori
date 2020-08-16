import tape from 'tape';
import { prophoto } from '../src/index';

tape('prophoto', t => {
	t.deepEqual(
		prophoto('white'),
		{
			mode: 'prophoto',
			r: 0.9999404253940375,
			g: 1.000024099507719,
			b: 1.0000709637282883
		},
		'white'
	);
	t.deepEqual(
		prophoto('black'),
		{ mode: 'prophoto', r: 0, g: 0, b: 0 },
		'black'
	);
	t.deepEqual(
		prophoto('red'),
		{
			mode: 'prophoto',
			r: 0.702257038842947,
			g: 0.27574036006788033,
			b: 0.10358186278783293
		},
		'red'
	);
	t.end();
});
