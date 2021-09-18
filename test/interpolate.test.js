import tape from 'tape';
import {
	interpolate,
	interpolateWith,
	interpolateWithPremultipliedAlpha,
	formatHex,
	formatHex8,
	rgb,
	samples
} from '../src/index.js';

tape('interpolate between black and white in RGB', function (test) {
	let grays = interpolate(['#fff', '#000']);
	test.equal(formatHex(grays(0.0)), '#ffffff');
	test.equal(formatHex(grays(0.1)), '#e6e6e6');
	test.equal(formatHex(grays(0.2)), '#cccccc');
	test.equal(formatHex(grays(0.3)), '#b3b3b3');
	test.equal(formatHex(grays(0.4)), '#999999');
	test.equal(formatHex(grays(0.5)), '#808080');
	test.equal(formatHex(grays(0.6)), '#666666');
	test.equal(formatHex(grays(0.7)), '#4d4d4d');
	test.equal(formatHex(grays(0.8)), '#333333');
	test.equal(formatHex(grays(0.9)), '#191919');
	test.equal(formatHex(grays(1.0)), '#000000');
	test.end();
});

tape('interpolate between black and white in RGBA', function (test) {
	let grays = interpolate(['#ffff', '#0000']);
	test.deepEqual(rgb(grays(0.0)), {
		r: 1,
		g: 1,
		b: 1,
		alpha: 1,
		mode: 'rgb'
	});
	test.deepEqual(rgb(grays(0.1)), {
		r: 0.9,
		g: 0.9,
		b: 0.9,
		alpha: 0.9,
		mode: 'rgb'
	});
	test.deepEqual(rgb(grays(0.2)), {
		r: 0.8,
		g: 0.8,
		b: 0.8,
		alpha: 0.8,
		mode: 'rgb'
	});
	test.deepEqual(rgb(grays(0.3)), {
		r: 0.7,
		g: 0.7,
		b: 0.7,
		alpha: 0.7,
		mode: 'rgb'
	});
	test.deepEqual(rgb(grays(0.4)), {
		r: 0.6,
		g: 0.6,
		b: 0.6,
		alpha: 0.6,
		mode: 'rgb'
	});
	test.deepEqual(rgb(grays(0.5)), {
		r: 0.5,
		g: 0.5,
		b: 0.5,
		alpha: 0.5,
		mode: 'rgb'
	});
	test.deepEqual(rgb(grays(0.6)), {
		r: 0.4,
		g: 0.4,
		b: 0.4,
		alpha: 0.4,
		mode: 'rgb'
	});
	test.deepEqual(rgb(grays(0.7)), {
		r: 0.30000000000000004,
		g: 0.30000000000000004,
		b: 0.30000000000000004,
		alpha: 0.30000000000000004,
		mode: 'rgb'
	});
	test.deepEqual(rgb(grays(0.8)), {
		r: 0.19999999999999996,
		g: 0.19999999999999996,
		b: 0.19999999999999996,
		alpha: 0.19999999999999996,
		mode: 'rgb'
	});
	test.deepEqual(rgb(grays(0.9)), {
		r: 0.09999999999999998,
		g: 0.09999999999999998,
		b: 0.09999999999999998,
		alpha: 0.09999999999999998,
		mode: 'rgb'
	});
	test.deepEqual(rgb(grays(1.0)), {
		r: 0,
		g: 0,
		b: 0,
		alpha: 0,
		mode: 'rgb'
	});
	test.end();
});

tape('interpolate between black and white in RGB/RGBA', function (test) {
	let grays = interpolate(['#fff', '#0000']);
	test.deepEqual(rgb(grays(0.0)), {
		r: 1,
		g: 1,
		b: 1,
		mode: 'rgb'
	});
	test.deepEqual(rgb(grays(0.1)), {
		r: 0.9,
		g: 0.9,
		b: 0.9,
		alpha: 0.9,
		mode: 'rgb'
	});
	test.deepEqual(rgb(grays(0.2)), {
		r: 0.8,
		g: 0.8,
		b: 0.8,
		alpha: 0.8,
		mode: 'rgb'
	});
	test.deepEqual(rgb(grays(0.3)), {
		r: 0.7,
		g: 0.7,
		b: 0.7,
		alpha: 0.7,
		mode: 'rgb'
	});
	test.deepEqual(rgb(grays(0.4)), {
		r: 0.6,
		g: 0.6,
		b: 0.6,
		alpha: 0.6,
		mode: 'rgb'
	});
	test.deepEqual(rgb(grays(0.5)), {
		r: 0.5,
		g: 0.5,
		b: 0.5,
		alpha: 0.5,
		mode: 'rgb'
	});
	test.deepEqual(rgb(grays(0.6)), {
		r: 0.4,
		g: 0.4,
		b: 0.4,
		alpha: 0.4,
		mode: 'rgb'
	});
	test.deepEqual(rgb(grays(0.7)), {
		r: 0.30000000000000004,
		g: 0.30000000000000004,
		b: 0.30000000000000004,
		alpha: 0.30000000000000004,
		mode: 'rgb'
	});
	test.deepEqual(rgb(grays(0.8)), {
		r: 0.19999999999999996,
		g: 0.19999999999999996,
		b: 0.19999999999999996,
		alpha: 0.19999999999999996,
		mode: 'rgb'
	});
	test.deepEqual(rgb(grays(0.9)), {
		r: 0.09999999999999998,
		g: 0.09999999999999998,
		b: 0.09999999999999998,
		alpha: 0.09999999999999998,
		mode: 'rgb'
	});
	test.deepEqual(rgb(grays(1.0)), {
		r: 0,
		g: 0,
		b: 0,
		alpha: 0,
		mode: 'rgb'
	});
	test.end();
});

tape('bug checking', function (test) {
	test.deepEqual(
		samples(4)
			.map(interpolate(['blue', 'white'], 'hsv'))
			.map(formatHex),
		['#0000ff', '#5555ff', '#aaaaff', '#ffffff']
	);
	test.end();
});

tape('color interpolation hints', t => {
	[0, 0.1, 0.2, 0.5, 0.8, 1].forEach(t0 => {
		t.deepEqual(
			interpolate(['red', 0.5, 'green'])(t0),
			interpolate(['red', 'green'])(t0)
		);
	});

	t.deepEqual(interpolate(['red', 0.2, 'green'])(0.5), {
		mode: 'rgb',
		r: 0.25808621995139025,
		g: 0.372411622926361,
		b: 0
	});

	t.end();
});

tape('interpolateWith()', t => {
	let colors = ['red', ['transparent', 0.33], 'blue'];
	let it2 = interpolateWith(v => v / 2)(colors);

	t.equal(formatHex8(it2(0.25)), '#1f00001f', 'w premultiplication');
	t.equal(formatHex8(it2(0.75)), '#00005050', 'w premultiplication');

	t.end();
});

tape('interpolateWithPremultipliedAlpha()', t => {
	let colors = ['red', 'transparent', 'blue'];
	let it = interpolate(colors);
	let it2 = interpolateWithPremultipliedAlpha(colors);

	t.equal(formatHex8(it(0.25)), '#80000080', 'w/o premultiplication');
	t.equal(formatHex8(it(0.75)), '#00008080', 'w/o premultiplication');
	t.equal(formatHex8(it2(0.25)), '#ff000080', 'w premultiplication');
	t.equal(formatHex8(it2(0.75)), '#0000ff80', 'w premultiplication');

	t.end();
});

tape('Easing fn returning outside [0,1], issue #140', t => {
	// From: https://github.com/mattdesl/eases/blob/master/back-in-out.js
	function backInOut(t) {
		var s = 1.70158 * 1.525;
		return (t *= 2) < 1
			? 0.5 * (t * t * ((s + 1) * t - s))
			: 0.5 * ((t -= 2) * t * ((s + 1) * t + s) + 2);
	}
	const it = interpolate([backInOut, '#ff0000', '#cc8833', '#3344cc']);
	t.equal(isNaN(it(0.05).r), false);
	t.equal(isNaN(it(0.95).r), false);
	t.end();
});
