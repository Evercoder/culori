import tape from 'tape';
import { clampChroma, displayable } from '../src/index.js';

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
	test.deepEqual(clampChroma('lch(50% 120 5)'), {
		mode: 'lch',
		l: 50,
		c: 77.4609375,
		h: 5
	});
	test.equal(displayable(clampChroma('lch(50% 120 5)')), true);
	test.end();
});

tape('Issue #129', function (test) {
	let color = {
		mode: 'lch',
		l: 44.01740616147086,
		c: 58.743630227529145,
		h: 180.30393476177233
	};
	test.equal(displayable(clampChroma(color)), true);
	test.equal(
		displayable(clampChroma({ mode: 'oklch', l: 0.5, c: 0.161, h: 180 })),
		true
	);

	test.deepEqual(
		clampChroma({ mode: 'oklch', l: 0.5, c: 0.16, h: 180 }, 'oklch'),
		{ mode: 'oklch', l: 0.5, c: 0.090703125, h: 180 }
	);
	test.end();
});
