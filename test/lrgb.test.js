import tape from 'tape';
import { rgb, lrgb } from '../src/index';

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
