import tape from 'tape';
import { luv } from '../src/index';

tape('luv', t => {
	t.deepEqual(luv('white'), { mode: 'luv', l: 100, u: 0, v: 0 });
	t.deepEqual(luv('black'), { mode: 'luv', l: 0, u: 0, v: 0 });
	t.deepEqual(luv('red'), {
		mode: 'luv',
		l: 54.29173376861782,
		u: 175.04257950825703,
		v: 25.958038150107736
	});
	t.deepEqual(luv('#00cc0080'), {
		mode: 'luv',
		l: 71.74939254482632,
		u: -69.39504614519973,
		v: 71.27997682968181,
		alpha: 0.5019607843137255
	});
	t.end();
});
