import tape from 'tape';
import { yiq, rgb, formatRgb, formatCss } from '../src/index.js';

tape('rgb -> yiq', t => {
	t.deepEqual(yiq('purple'), {
		mode: 'yiq',
		y: 0.20749931419607845,
		i: 0.13762565019607842,
		q: 0.26233329443137254
	});
	t.end();
});

tape('rgb -> yiq -> rgb', t => {
	t.deepEqual(
		formatRgb(yiq('rgb(255, 255, 255)')),
		'rgb(255, 255, 255)',
		'white'
	);

	t.deepEqual(formatRgb(yiq('rgb(0, 0, 0)')), 'rgb(0, 0, 0)', 'black');
	t.deepEqual(formatRgb(yiq('rgb(100, 0, 0)')), 'rgb(100, 0, 0)', 'red');
	t.deepEqual(formatRgb(yiq('rgb(0, 120, 0)')), 'rgb(0, 120, 0)', 'blue');
	t.deepEqual(formatRgb(yiq('rgb(0, 0, 89)')), 'rgb(0, 0, 89)', 'green');

	t.end();
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

tape('formatCss', t => {
	t.equal(
		formatCss('color(--yiq 0% 50% 0.5 / 25%)'),
		'color(--yiq 0 0.5 0.5 / 0.25)'
	);
	t.end();
});

tape('missing components', t => {
	t.ok(rgb('color(--yiq none 0.5 none)'), 'yiq to rgb is ok');
	t.deepEqual(rgb('color(--yiq none 0.5 none)'), rgb('color(--yiq 0 0.5 0'));
	t.ok(yiq('rgb(none 100 20)'), 'rgb to yiq is ok');
	t.deepEqual(yiq('rgb(none 100 20)'), yiq('rgb(0 100 20)'));
	t.end();
});
