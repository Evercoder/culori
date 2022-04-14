import tape from 'tape';
import { blend } from '../src/index.js';

tape('blendNormal', function (test) {
	test.throws(() => {
		blend([]);
	});

	test.deepEqual(blend(['white', 'rgba(0, 0, 0, 0.5)']), {
		mode: 'rgb',
		r: 0.5,
		g: 0.5,
		b: 0.5,
		alpha: 1
	});

	test.deepEqual(
		blend([
			{ mode: 'rgb', r: 1, g: 0, b: 0, alpha: 0.5 },
			{ mode: 'rgb', r: 0, g: 0, b: 1, alpha: 0.5 }
		]),
		{
			mode: 'rgb',
			r: 0.3333333333333333,
			g: 0,
			b: 0.6666666666666666,
			alpha: 0.75
		}
	);

	// blend with transparent source
	test.deepEqual(
		blend([{ mode: 'rgb', r: 1, g: 0, b: 0, alpha: 0.5 }, 'transparent']),
		{ mode: 'rgb', r: 1, g: 0, b: 0, alpha: 0.5 }
	);

	// blend with transparent backdrop
	test.deepEqual(
		blend(['transparent', { mode: 'rgb', r: 1, g: 0, b: 0, alpha: 0.5 }]),
		{ mode: 'rgb', r: 1, g: 0, b: 0, alpha: 0.5 }
	);

	test.end();
});
