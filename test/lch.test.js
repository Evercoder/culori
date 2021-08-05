import tape from 'tape';
import { lch, formatCss } from '../src/index';

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

tape('formatCss', t => {
	t.equal(formatCss('lch(40 10 30 / 50%)'), 'lch(40% 10 30 / 0.5)');
	t.equal(formatCss('lch(40 10 30 / 100%)'), 'lch(40% 10 30)');
	t.equal(formatCss('lch(40 10 30)'), 'lch(40% 10 30)');
	t.equal(formatCss(lch('#ffffff00')), 'lch(100% 0 0 / 0)');
	t.end();
});
