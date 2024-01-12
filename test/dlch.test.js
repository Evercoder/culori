import tape from 'tape';
import { dlch, rgb, formatCss } from '../src/index.js';

tape('dlch', t => {
	t.deepEqual(dlch('white'), { mode: 'dlch', l: 100, c: 0 }, 'white');
	t.deepEqual(
		dlch('#111'),
		{ mode: 'dlch', l: 5.938147621379976, c: 0 },
		'#111'
	);
	t.deepEqual(dlch('black'), { mode: 'dlch', l: 0, c: 0 }, 'black');
	t.deepEqual(
		dlch('red'),
		{
			mode: 'dlch',
			l: 57.28917941426675,
			c: 49.914581534832,
			h: 37.691765574369924
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

tape('missing components', t => {
	t.ok(rgb('color(--din99o-lch none 0.5 none)'), 'dlch to rgb is ok');
	t.deepEqual(
		rgb('color(--din99o-lch none 0.5 none)'),
		rgb('color(--din99o-lch 0% 0.5 0)')
	);
	t.ok(dlch('rgb(none 100 20)'), 'rgb to dlch is ok');
	t.deepEqual(dlch('rgb(none 100 20)'), dlch('rgb(0 100 20)'));
	t.end();
});
