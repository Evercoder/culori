import tape from 'tape';
import { lab, rgb, formatCss } from '../src/index.js';

tape('lab', t => {
	t.deepEqual(
		lab('white'),
		{ mode: 'lab', l: 100.00000139649632, a: 0, b: 0 },
		'white'
	);

	// Tests that achromatic RGB colors get a = b = 0 in CIELab
	t.deepEqual(
		lab('#111'),
		{ mode: 'lab', l: 5.063329676301251, a: 0, b: 0 },
		'#111'
	);

	t.deepEqual(lab('black'), { mode: 'lab', l: 0, a: 0, b: 0 }, 'black');
	t.deepEqual(
		lab('red'),
		{
			mode: 'lab',
			l: 54.29054294696968,
			a: 80.80492033462417,
			b: 69.89098825896278
		},
		'red'
	);

	t.deepEqual(lab('lab(50% -10% 200% / 10%)'), {
		mode: 'lab',
		l: 50,
		a: -12.5,
		b: 250,
		alpha: 0.1
	});
	t.end();
});

tape('formatCss', t => {
	t.equal(formatCss('lab(40% 10 30 / 50%)'), 'lab(40 10 30 / 0.5)');
	t.equal(formatCss('lab(40% 10 30 / 100%)'), 'lab(40 10 30)');
	t.equal(formatCss('lab(40% 10 30)'), 'lab(40 10 30)');
	t.end();
});

tape('missing components', t => {
	t.ok(rgb('lab(none 0.5 none)'), 'lab to rgb is ok');
	t.deepEqual(rgb('lab(none 0.5 none)'), rgb('lab(0% 0.5 0%)'));
	t.ok(lab('rgb(none 100 20)'), 'rgb to lab is ok');
	t.deepEqual(lab('rgb(none 100 20)'), lab('rgb(0 100 20)'));
	t.end();
});
