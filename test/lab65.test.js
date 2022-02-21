import tape from 'tape';
import { lab65, formatCss } from '../src/index.js';

tape('lab65', t => {
	t.deepEqual(lab65('white'), { mode: 'lab65', l: 100, a: 0, b: 0 }, 'white');

	// Tests that achromatic RGB colors get a = b = 0 in CIELab D65
	t.deepEqual(
		lab65('#111'),
		{ mode: 'lab65', l: 5.063329493432597, a: 0, b: 0 },
		'#111'
	);

	t.deepEqual(lab65('black'), { mode: 'lab65', l: 0, a: 0, b: 0 }, 'black');
	t.deepEqual(
		lab65('red'),
		{
			mode: 'lab65',
			l: 53.237115595429344,
			a: 80.09011352310385,
			b: 67.20326351172214
		},
		'red'
	);
	t.end();
});

tape('color(--lab-d65)', t => {
	t.deepEqual(lab65('color(--lab-d65 30 0.5 1 / 0.25)'), {
		l: 30,
		a: 0.5,
		b: 1,
		alpha: 0.25,
		mode: 'lab65'
	});
	t.end();
});

tape('formatCss', t => {
	t.equal(
		formatCss('color(--lab-d65 30 0.5 1 / 0.25)'),
		'color(--lab-d65 30 0.5 1 / 0.25)'
	);
	t.end();
});
