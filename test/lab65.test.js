import tape from 'tape';
import { lab65 } from '../src/index';

tape('lab65', t => {
	t.deepEqual(
		lab65('white'),
		{ mode: 'lab65', l: 100.00000386666655, a: 0, b: 0 },
		'white'
	);

	// Tests that achromatic RGB colors get a = b = 0 in CIELab D65
	t.deepEqual(
		lab65('#111'),
		{ mode: 'lab65', l: 5.06332999976555, a: 0, b: 0 },
		'#111'
	);

	t.deepEqual(lab65('black'), { mode: 'lab65', l: 0, a: 0, b: 0 }, 'black');
	t.deepEqual(
		lab65('red'),
		{
			mode: 'lab65',
			l: 53.240794141307205,
			a: 80.09245959641115,
			b: 67.20319651585298
		},
		'red'
	);
	t.end();
});
