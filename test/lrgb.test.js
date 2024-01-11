import tape from 'tape';
import { rgb, lrgb, formatCss } from '../src/index.js';

tape('round-trip', t => {
	let in_gamut = {
		mode: 'rgb',
		r: 0.1,
		g: 0.25,
		b: 0.7
	};
	t.deepEqual(
		lrgb(in_gamut),
		{
			mode: 'lrgb',
			r: 0.010022825574869039,
			g: 0.05087608817155679,
			b: 0.44798841244188325
		},
		'in gamut'
	);
	t.deepEqual(rgb(lrgb(in_gamut)), in_gamut, 'in gamut');

	let out_of_gamut = {
		mode: 'rgb',
		r: -0.2,
		g: 0.25,
		b: 2.7
	};
	t.deepEqual(
		lrgb(out_of_gamut),
		{
			mode: 'lrgb',
			r: -0.033104766570885055,
			g: 0.05087608817155679,
			b: 10.011195548645787
		},
		'out of gamut'
	);
	t.deepEqual(rgb(lrgb(out_of_gamut)), out_of_gamut, 'out of gamut');
	t.end();
});

tape('color(srgb-linear)', t => {
	t.deepEqual(lrgb('color(srgb-linear 1 0 0 / 0.25)'), {
		r: 1,
		g: 0,
		b: 0,
		alpha: 0.25,
		mode: 'lrgb'
	});
	t.deepEqual(lrgb('color(srgb-linear 0% 50% 0.5 / 25%)'), {
		r: 0,
		g: 0.5,
		b: 0.5,
		alpha: 0.25,
		mode: 'lrgb'
	});
	t.end();
});

tape('formatCss', t => {
	t.equal(
		formatCss('color(srgb-linear 0% 50% 0.5 / 25%)'),
		'color(srgb-linear 0 0.5 0.5 / 0.25)'
	);
	t.end();
});

tape('missing components', t => {
	t.ok(rgb('color(srgb-linear none 0.5 none)'), 'lrgb to rgb is ok');
	t.deepEqual(
		rgb('color(srgb-linear none 0.5 none)'),
		rgb('color(srgb-linear 0 0.5 0')
	);
	t.ok(lrgb('rgb(none 100 20)'), 'rgb to lrgb is ok');
	t.deepEqual(lrgb('rgb(none 100 20)'), lrgb('rgb(0 100 20)'));
	t.end();
});
