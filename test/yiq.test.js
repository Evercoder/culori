import tape from 'tape';
import { yiq, formatRgb } from '../src/index';

tape('rgb to yiq and back', function (test) {
	test.deepEqual(
		formatRgb(yiq('rgb(255, 255, 255)')),
		'rgb(255, 255, 255)',
		'white'
	);

	test.deepEqual(formatRgb(yiq('rgb(0, 0, 0)')), 'rgb(0, 0, 0)', 'black');

	test.deepEqual(formatRgb(yiq('rgb(100, 0, 0)')), 'rgb(100, 0, 0)', 'red');

	test.deepEqual(formatRgb(yiq('rgb(0, 120, 0)')), 'rgb(0, 120, 0)', 'blue');

	test.deepEqual(formatRgb(yiq('rgb(0, 0, 89)')), 'rgb(0, 0, 89)', 'green');

	test.end();
});
