import tape from 'tape';
import { lchuv } from '../src/index';

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
