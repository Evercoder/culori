import tape from 'tape';
import { a98, formatCss } from '../src/index';

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

tape('color(a98-rgb)', t => {
	t.deepEqual(a98('color(a98-rgb 1 0 0 / 0.25)'), {
		r: 1,
		g: 0,
		b: 0,
		alpha: 0.25,
		mode: 'a98'
	});
	t.deepEqual(a98('color(a98-rgb 0% 50% 0.5 / 25%)'), {
		r: 0,
		g: 0.5,
		b: 0.5,
		alpha: 0.25,
		mode: 'a98'
	});
	t.end();
});

tape('formatCss', t => {
	t.equal(
		formatCss('color(a98-rgb 0% 50% 0.5 / 25%)'),
		'color(a98-rgb 0 0.5 0.5 / 0.25)'
	);
	t.end();
});
