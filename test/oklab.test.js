import tape from 'tape';
import { oklab } from '../src/index';

tape('oklab', t => {
	t.deepEqual(
		oklab('white'),
		{ mode: 'oklab', l: 0.9999882345920056, a: 0, b: 0 },
		'white'
	);

	// Tests that achromatic RGB colors get a = b = 0 in OKLab
	t.deepEqual(
		oklab('#111'),
		{ mode: 'oklab', l: 0.17763568309569516, a: 0, b: 0 },
		'#111'
	);

	t.deepEqual(oklab('black'), { mode: 'oklab', l: 0, a: 0, b: 0 }, 'black');
	t.deepEqual(
		oklab('red'),
		{
			mode: 'oklab',
			l: 0.6279151939969809,
			a: 0.2249032308661069,
			b: 0.12580287012451802
		},
		'red'
	);
	t.end();
});
