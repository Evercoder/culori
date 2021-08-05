import tape from 'tape';
import { lab, formatCss } from '../src/index';

tape('lab', t => {
	t.deepEqual(lab('white'), { mode: 'lab', l: 100, a: 0, b: 0 }, 'white');

	// Tests that achromatic RGB colors get a = b = 0 in CIELab
	t.deepEqual(
		lab('#111'),
		{ mode: 'lab', l: 5.063329493432597, a: 0, b: 0 },
		'#111'
	);

	t.deepEqual(lab('black'), { mode: 'lab', l: 0, a: 0, b: 0 }, 'black');
	t.deepEqual(
		lab('red'),
		{
			mode: 'lab',
			l: 54.29173376861782,
			a: 80.8124553179771,
			b: 69.88504032350531
		},
		'red'
	);
	t.end();
});

tape('formatCss', t => {
	t.equal(formatCss('lab(40 10 30 / 50%)'), 'lab(40% 10 30 / 0.5)');
	t.equal(formatCss('lab(40 10 30 / 100%)'), 'lab(40% 10 30)');
	t.equal(formatCss('lab(40 10 30)'), 'lab(40% 10 30)');
	t.end();
});
