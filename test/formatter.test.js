import tape from 'tape';
import { formatHex, formatRgb, rgb } from '../src/index';

tape('formatHex', function (test) {
	test.equal(formatHex('tomato'), '#ff6347');
	test.end();
});

tape('formatRgb', function (test) {
	test.equal(formatRgb(rgb('#f0f0f0f0')), 'rgba(240, 240, 240, 0.94)');
	test.equal(formatRgb('#f0f0f0f0'), 'rgba(240, 240, 240, 0.94)');

	test.end();
});
