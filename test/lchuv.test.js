import tape from 'tape';
import { lchuv, formatCss } from '../src/index';

tape('lchuv', t => {
	t.deepEqual(lchuv('white'), { mode: 'lchuv', l: 100, c: 0 });
	t.deepEqual(lchuv('black'), { mode: 'lchuv', l: 0, c: 0 });
	t.deepEqual(lchuv('red'), {
		mode: 'lchuv',
		l: 54.29173376861782,
		c: 176.95684328532462,
		h: 8.435233785129249
	});
	t.deepEqual(lchuv('#00cc0080'), {
		mode: 'lchuv',
		l: 71.74939254482632,
		c: 99.48119182204431,
		h: 134.23232917955536,
		alpha: 0.5019607843137255
	});
	t.end();
});

tape('color(--lchuv)', t => {
	t.deepEqual(lchuv('color(--lchuv 30 0.5 1 / 0.25)'), {
		l: 30,
		c: 0.5,
		h: 1,
		alpha: 0.25,
		mode: 'lchuv'
	});
	t.end();
});

tape('formatCss', t => {
	t.equal(
		formatCss('color(--lchuv 30 0.5 1 / 0.25)'),
		'color(--lchuv 30 0.5 1 / 0.25)'
	);
	t.end();
});
