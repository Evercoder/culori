import tape from 'tape';
import { dlab, formatCss } from '../src/index.js';

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

tape('color(--din99o-lab)', t => {
	t.deepEqual(dlab('color(--din99o-lab 30 0.5 1 / 0.25)'), {
		l: 30,
		a: 0.5,
		b: 1,
		alpha: 0.25,
		mode: 'dlab'
	});
	t.deepEqual(dlab('color(--din99o-lab 25% 50% 0.5 / 25%)'), {
		l: 25,
		a: 0,
		b: 0.5,
		alpha: 0.25,
		mode: 'dlab'
	});
	t.end();
});

tape('formatCss', t => {
	t.equal(
		formatCss('color(--din99o-lab 25% 50% 0.5 / 25%)'),
		'color(--din99o-lab 25 0 0.5 / 0.25)'
	);
	t.end();
});
