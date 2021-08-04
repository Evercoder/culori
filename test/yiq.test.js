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

tape('color(--yiq)', t => {
	t.deepEqual(yiq('color(--yiq 1 0 0 / 0.25)'), {
		y: 1,
		i: 0,
		q: 0,
		alpha: 0.25,
		mode: 'yiq'
	});
	t.deepEqual(yiq('color(--yiq 0% 50% 0.5 / 25%)'), {
		y: 0,
		i: 0.5,
		q: 0.5,
		alpha: 0.25,
		mode: 'yiq'
	});
	t.end();
});
