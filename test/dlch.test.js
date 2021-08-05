import tape from 'tape';
import { dlch, formatCss } from '../src/index';

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

tape('color(--din99o-lch)', t => {
	t.deepEqual(dlch('color(--din99o-lch 30 0.5 1 / 0.25)'), {
		l: 30,
		c: 0.5,
		h: 1,
		alpha: 0.25,
		mode: 'dlch'
	});
	t.deepEqual(dlch('color(--din99o-lch 0 50% 0.5 / 25%)'), {
		l: 0,
		c: 0.5,
		h: 0.5,
		alpha: 0.25,
		mode: 'dlch'
	});
	t.end();
});

tape('formatCss', t => {
	t.equal(
		formatCss('color(--din99o-lch 0 50% 0.5 / 25%)'),
		'color(--din99o-lch 0 0.5 0.5 / 0.25)'
	);
	t.end();
});
