import tape from 'tape';
import { a98 } from '../src/index';

tape('a98', t => {
	t.deepEqual(a98('white'), {
		mode: 'a98',
		r: 1.00004873746878,
		g: 0.9999895795459405,
		b: 0.9998949426626631
	});
	t.deepEqual(a98('black'), { mode: 'a98', r: 0, g: 0, b: 0 });
	t.deepEqual(a98('red'), {
		mode: 'a98',
		r: 0.8586536809879299,
		g: 0.0007373827793623229,
		b: -0.00010541322136924195
	});
	t.end();
});
