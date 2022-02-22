import tape from 'tape';
import { lch65, lab65, formatCss } from '../src/index.js';

tape('lch65', t => {
	t.deepEqual(lch65('white'), { mode: 'lch65', l: 100, c: 0 }, 'white');
	t.deepEqual(
		lch65('#111'),
		{ mode: 'lch65', l: 5.063329493432597, c: 0 },
		'#111'
	);
	t.deepEqual(lch65('black'), { mode: 'lch65', l: 0, c: 0 }, 'black');
	t.deepEqual(
		lch65('red'),
		{
			mode: 'lch65',
			l: 53.237115595429344,
			c: 104.55001152926587,
			h: 39.99986515439813
		},
		'red'
	);
	t.end();
});

tape('lab65 <-> lch65', t => {
	t.deepEqual(lch65(lab65({ l: 100, a: 0.2, b: 0.2 })), {
		mode: 'lch65',
		l: 100,
		c: 0.28284271247461906,
		h: 45
	});

	t.deepEqual(
		lab65(
			lch65({
				mode: 'lch65',
				l: 100,
				c: 0.28284271247461906,
				h: 45
			})
		),
		{ mode: 'lab65', l: 100, a: 0.20000000000000004, b: 0.2 }
	);
	t.end();
});

tape('color(--lch-d65)', t => {
	t.deepEqual(lch65('color(--lch-d65 30 0.5 1 / 0.25)'), {
		l: 30,
		c: 0.5,
		h: 1,
		alpha: 0.25,
		mode: 'lch65'
	});
	t.end();
});

tape('formatCss', t => {
	t.equal(
		formatCss('color(--lch-d65 30 0.5 1 / 0.25)'),
		'color(--lch-d65 30 0.5 1 / 0.25)'
	);
	t.end();
});
