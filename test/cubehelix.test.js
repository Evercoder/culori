import tape from 'tape';
import { cubehelix, formatCss, rgb } from '../src/index.js';

tape('color(--cubehelix)', t => {
	t.deepEqual(cubehelix('color(--cubehelix 30 0.5 1 / 0.25)'), {
		h: 30,
		s: 0.5,
		l: 1,
		alpha: 0.25,
		mode: 'cubehelix'
	});
	t.deepEqual(cubehelix('color(--cubehelix 0 50% 0.5 / 25%)'), {
		h: 0,
		s: 0.5,
		l: 0.5,
		alpha: 0.25,
		mode: 'cubehelix'
	});
	t.end();
});

tape('formatCss', t => {
	t.equal(
		formatCss('color(--cubehelix 0 50% 0.5 / 25%)'),
		'color(--cubehelix 0 0.5 0.5 / 0.25)'
	);
	t.end();
});

tape('missing components', t => {
	t.ok(rgb('color(--cubehelix none 0.5 none)'));
	t.deepEqual(
		rgb('color(--cubehelix none 0.5 none)'),
		rgb('color(--cubehelix 0 0.5 0)')
	);
	t.ok(cubehelix('rgb(none 100 20)'));
	t.deepEqual(cubehelix('rgb(none 100 20)'), cubehelix('rgb(0 100 20)'));
	t.end();
});
