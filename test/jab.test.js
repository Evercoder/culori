import tape from 'tape';
import { jab, xyz, xyz65, mapper } from '../src/index';

tape('jab', t => {
	t.deepEqual(
		jab('white'),
		{ mode: 'jab', j: 0.22206540994652027, a: 0, b: 0 },
		'white'
	);

	t.deepEqual(
		jab('black'),
		{ mode: 'jab', j: 3.2311742677852644e-27, a: 0, b: 0 },
		'black'
	);

	t.deepEqual(
		jab('red'),
		{
			mode: 'jab',
			j: 0.13439375302384474,
			a: 0.11788932317487365,
			b: 0.11188289876994292
		},
		'red'
	);
	t.end();
});
