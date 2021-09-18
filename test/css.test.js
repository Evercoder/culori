import tape from 'tape';
import { formatRgb, formatHex, rgb } from '../src/index.js';

tape('formatRgb', function (test) {
	test.deepEqual(
		formatRgb(rgb('rgb(200, 300, 100)')),
		'rgb(200, 255, 100)',
		'rgb'
	);

	test.deepEqual(
		formatRgb(rgb('rgba(200, 300, 100, 0.1)')),
		'rgba(200, 255, 100, 0.1)',
		'rgb'
	);

	test.end();
});

tape('formatHex', function (test) {
	test.deepEqual(formatHex(rgb('#c0c2ff')), '#c0c2ff', '#c0c2ff');

	test.deepEqual(formatHex(rgb('#00c2ff')), '#00c2ff', '#00c2ff');

	test.end();
});
