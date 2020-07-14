import tape from 'tape';
import { formatHex, formatHex8, formatRgb, rgb } from '../src/index';

tape('formatHex', function (test) {
	test.equal(formatHex('tomato'), '#ff6347');
	test.end();
});

tape('formatHex8', t => {
	t.equal(
		formatHex8({ mode: 'rgb', r: 1, g: 1, b: 1, alpha: 0 }),
		'#ffffff00'
	);
	t.end();
});

tape('formatRgb', function (test) {
	test.equal(formatRgb(rgb('#f0f0f0f0')), 'rgba(240, 240, 240, 0.94)');
	test.equal(formatRgb('#f0f0f0f0'), 'rgba(240, 240, 240, 0.94)');

	test.end();
});
