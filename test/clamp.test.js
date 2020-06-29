import tape from 'tape';
import { clampChroma } from '../src/index';

tape('RGB', function (test) {
	test.deepEqual(clampChroma('red'), { mode: 'rgb', r: 1, g: 0, b: 0 });

	test.deepEqual(clampChroma('rgb(300, 255, 255)'), {
		mode: 'rgb',
		r: 1,
		g: 1,
		b: 1
	});

	test.end();
});

tape('LCh', function (test) {
	test.deepEqual(clampChroma('lch(50 120 5)'), {
		mode: 'lch',
		l: 50,
		c: 77.48291015625,
		h: 5
	});

	test.end();
});
