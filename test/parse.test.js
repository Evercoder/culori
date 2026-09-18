import test from 'node:test';
import assert from 'node:assert';
import { parse, parseTransparent } from '../src/index.js';

test('named colors', t => {
	assert.deepEqual(
		parse('tomato'),
		{ mode: 'rgb', r: 1, g: 0.38823529411764707, b: 0.2784313725490196 },
		'tomato'
	);

	assert.deepEqual(
		parse('RoyalBlue'),
		{
			mode: 'rgb',
			r: 0.2549019607843137,
			g: 0.4117647058823529,
			b: 0.8823529411764706
		},
		'RoyalBlue (CamelCase)'
	);
});

test('hex colors', t => {
	assert.deepEqual(
		parse('#369'),
		{ mode: 'rgb', r: 0.2, g: 0.4, b: 0.6 },
		'#369'
	);

	assert.deepEqual(
		parse('369'),
		{ mode: 'rgb', r: 0.2, g: 0.4, b: 0.6 },
		'369'
	);

	assert.deepEqual(
		parse('#3690'),
		{ mode: 'rgb', r: 0.2, g: 0.4, b: 0.6, alpha: 0 },
		'#3690'
	);

	assert.deepEqual(
		parse('3690'),
		{ mode: 'rgb', r: 0.2, g: 0.4, b: 0.6, alpha: 0 },
		'3690'
	);

	assert.deepEqual(
		parse('#163264'),
		{
			mode: 'rgb',
			r: 0.08627450980392157,
			g: 0.19607843137254902,
			b: 0.39215686274509803
		},
		'#163264'
	);

	assert.deepEqual(
		parse('163264'),
		{
			mode: 'rgb',
			r: 0.08627450980392157,
			g: 0.19607843137254902,
			b: 0.39215686274509803
		},
		'163264'
	);

	assert.deepEqual(
		parse('#163264ff'),
		{
			mode: 'rgb',
			r: 0.08627450980392157,
			g: 0.19607843137254902,
			b: 0.39215686274509803,
			alpha: 1
		},
		'#163264ff'
	);

	assert.deepEqual(
		parse('163264FF'),
		{
			mode: 'rgb',
			r: 0.08627450980392157,
			g: 0.19607843137254902,
			b: 0.39215686274509803,
			alpha: 1
		},
		'163264FF'
	);
});

test('rgb', t => {
	assert.deepEqual(
		parse('rgb(255, 0, 0)'),
		{ r: 1, g: 0, b: 0, mode: 'rgb' },
		'rgb legacy'
	);

	assert.deepEqual(
		parse('rgb(100%, 0%, 0%)'),
		{ r: 1, g: 0, b: 0, mode: 'rgb' },
		'rgb legacy (percentage)'
	);

	assert.deepEqual(
		parse('rgba(255, 0, 0, 0.5)'),
		{ r: 1, g: 0, b: 0, mode: 'rgb', alpha: 0.5 },
		'rgba legacy'
	);

	assert.deepEqual(
		parse('rgba(100%, 0%, 0%, 50%)'),
		{ r: 1, g: 0, b: 0, mode: 'rgb', alpha: 0.5 },
		'rgba legacy (percentage)'
	);

	assert.deepEqual(
		parse('rgb(255  0  0)'),
		{ r: 1, g: 0, b: 0, mode: 'rgb' },
		'rgb current'
	);

	assert.deepEqual(
		parse('rgb(100% 0%   0%)'),
		{ r: 1, g: 0, b: 0, mode: 'rgb' },
		'rgb current (percentage)'
	);

	assert.deepEqual(
		parse('rgb(255 0  0 / 0.5)'),
		{ r: 1, g: 0, b: 0, mode: 'rgb', alpha: 0.5 },
		'rgba current'
	);

	assert.deepEqual(
		parse('rgb(100% 0% 0% / 50%)'),
		{ r: 1, g: 0, b: 0, mode: 'rgb', alpha: 0.5 },
		'rgba current (percentage)'
	);

	assert.deepEqual(
		parse('rgba(255, 0, 0, 150%)'),
		{ mode: 'rgb', r: 1, g: 0, b: 0, alpha: 1 },
		'rgb legacy, clamp alpha > 1'
	);

	assert.deepEqual(
		parse('rgba(255, 0, 0, -50%)'),
		{ mode: 'rgb', r: 1, g: 0, b: 0, alpha: 0 },
		'rgb legacy, clamp alpha < 0'
	);

	assert.deepEqual(
		parse('rgb(255 0 0 / 150%)'),
		{ mode: 'rgb', r: 1, g: 0, b: 0, alpha: 1 },
		'rgb modern, clamp alpha > 1'
	);

	assert.deepEqual(
		parse('rgb(255 0 0 / -50%)'),
		{ mode: 'rgb', r: 1, g: 0, b: 0, alpha: 0 },
		'rgb modern, clamp alpha < 0'
	);
});

test('hsl', t => {
	assert.deepEqual(
		parse('hsl(0, 1, 0.5)'),
		undefined,
		'hsl legacy (no percentage)'
	);

	assert.deepEqual(
		parse('hsl(120, 100%, 50%)'),
		{ h: 120, s: 1, l: 0.5, mode: 'hsl' },
		'hsl legacy (percentage)'
	);

	assert.deepEqual(
		parse('hsl(120deg, 100%, 50%)'),
		{ h: 120, s: 1, l: 0.5, mode: 'hsl' },
		'hsl legacy (deg)'
	);

	assert.deepEqual(
		parse('hsl(0.5turn, 100%, 50%)'),
		{ h: 180, s: 1, l: 0.5, mode: 'hsl' },
		'hsl legacy (turn)'
	);

	assert.deepEqual(
		parse(`hsl(${Math.PI}rad, 100%, 50%)`),
		{ h: 180, s: 1, l: 0.5, mode: 'hsl' },
		'hsl legacy (rad)'
	);

	assert.deepEqual(
		parse('hsl(40grad, 100%, 50%)'),
		{ h: 36, s: 1, l: 0.5, mode: 'hsl' },
		'hsl legacy (grad)'
	);

	assert.deepEqual(
		parse('hsla(0, 1, 0.5, 0.5)'),
		undefined,
		'hsla legacy (no percentage)'
	);

	assert.deepEqual(
		parse('hsla(240, 100%, 50%, 50%)'),
		{ h: 240, s: 1, l: 0.5, mode: 'hsl', alpha: 0.5 },
		'hsla legacy (percentage)'
	);

	assert.deepEqual(
		parse('hsl(0 100 50)'),
		{ h: 0, s: 1, l: 0.5, mode: 'hsl' },
		'hsl current (no percentage)'
	);

	assert.deepEqual(
		parse('hsl(180 100% 50%)'),
		{ h: 180, s: 1, l: 0.5, mode: 'hsl' },
		'hsl current (percentage)'
	);

	assert.deepEqual(
		parse('hsl(0 100 50 / 0.5)'),
		{ h: 0, s: 1, l: 0.5, mode: 'hsl', alpha: 0.5 },
		'hsla current (no percentage)'
	);

	assert.deepEqual(
		parse('hsl(0 100% 50% / 50%)'),
		{ h: 0, s: 1, l: 0.5, mode: 'hsl', alpha: 0.5 },
		'hsla current (percentage)'
	);

	assert.deepEqual(
		parse('hsla(240, 100%, 50%, -50%)'),
		{ mode: 'hsl', h: 240, s: 1, l: 0.5, alpha: 0 },
		'hsl legacy, clamp alpha < 0'
	);

	assert.deepEqual(
		parse('hsla(240, 100%, 50%, 150%)'),
		{ mode: 'hsl', h: 240, s: 1, l: 0.5, alpha: 1 },
		'hsl legacy, clamp alpha > 1'
	);

	assert.deepEqual(
		parse('hsl(240 100% 50% / -50%)'),
		{ mode: 'hsl', h: 240, s: 1, l: 0.5, alpha: 0 },
		'hsl modern, clamp alpha < 0'
	);

	assert.deepEqual(
		parse('hsla(240 100% 50% / 150%)'),
		{ mode: 'hsl', h: 240, s: 1, l: 0.5, alpha: 1 },
		'hsl modern, clamp alpha > 1'
	);
});

test('hwb', t => {
	assert.deepEqual(
		parse('hwb(100 0% 0%)'),
		{ h: 100, w: 0, b: 0, mode: 'hwb' },
		'black'
	);

	assert.deepEqual(
		parse('hwb(200 150% 150%)'),
		{ h: 200, w: 1.5, b: 1.5, mode: 'hwb' },
		'grey'
	);

	assert.deepEqual(
		parse('hwb(200 10% 30% / 50%)'),
		{ h: 200, w: 0.1, b: 0.3, alpha: 0.5, mode: 'hwb' },
		'hwba'
	);

	assert.deepEqual(
		parse('hwb(60deg 25 100 / 0.5)'),
		{
			h: 60,
			w: 0.25,
			b: 1,
			alpha: 0.5,
			mode: 'hwb'
		},
		'<number>'
	);

	assert.deepEqual(
		parse('hwb(50deg 25 100 / -0.5)'),
		{ mode: 'hwb', h: 50, w: 0.25, b: 1, alpha: 0 },
		'clamp alpha < 0'
	);

	assert.deepEqual(
		parse('hwb(50deg 25 100 / 150%)'),
		{ mode: 'hwb', h: 50, w: 0.25, b: 1, alpha: 1 },
		'clamp alpha > 1'
	);
});

test('transparent', t => {
	assert.deepEqual(parse('transparent'), {
		r: 0,
		g: 0,
		b: 0,
		alpha: 0,
		mode: 'rgb'
	});
});

test('lab()', t => {
	assert.deepEqual(
		parse('lab(50% -5 10 / 50%)'),
		{ l: 50, a: -5, b: 10, alpha: 0.5, mode: 'lab' },
		'lab + alpha'
	);

	assert.deepEqual(
		parse('lab(50% -5 10)'),
		{ l: 50, a: -5, b: 10, mode: 'lab' },
		'lab with percentage'
	);

	assert.deepEqual(
		parse('lab(130 -45 +1000)'),
		{ l: 100, a: -45, b: 1000, mode: 'lab' },
		'clamp L to 100'
	);

	assert.deepEqual(
		parse('lab(-1 -45 +1000)'),
		{ l: 0, a: -45, b: 1000, mode: 'lab' },
		'clamp L to 0'
	);

	assert.deepEqual(
		parse('lab(40 -10 10 / -0.5)'),
		{ mode: 'lab', l: 40, a: -10, b: 10, alpha: 0 },
		'clamp alpha < 0'
	);

	assert.deepEqual(
		parse('lab(40 -10 10 / 1.5)'),
		{ mode: 'lab', l: 40, a: -10, b: 10, alpha: 1 },
		'clamp alpha > 1'
	);
});

test('lch()', t => {
	assert.deepEqual(
		parse('lch(50% 3 240 / 50%)'),
		{ l: 50, c: 3, h: 240, alpha: 0.5, mode: 'lch' },
		'lch + alpha'
	);

	assert.deepEqual(
		parse('lch(50% -3 240deg / 50%)'),
		{ l: 50, c: 0, h: 240, alpha: 0.5, mode: 'lch' },
		'lch negative c'
	);

	assert.deepEqual(
		parse('lch(50% 3 240)'),
		{ l: 50, c: 3, h: 240, mode: 'lch' },
		'lch with percentage'
	);

	assert.deepEqual(
		parse('lch(130 -45 480deg)'),
		{ l: 100, c: 0, h: 480, mode: 'lch' },
		'clamp L to 100, C to 0'
	);

	assert.deepEqual(
		parse('lch(-1 -45 -480deg)'),
		{ l: 0, c: 0, h: -480, mode: 'lch' },
		'clamp L to 0, C to 0'
	);

	assert.deepEqual(
		parse('lch(40 5 10 / -0.5)'),
		{ mode: 'lch', l: 40, c: 5, h: 10, alpha: 0 },
		'clamp alpha < 0'
	);

	assert.deepEqual(
		parse('lch(40 5 10 / 1.5)'),
		{ mode: 'lch', l: 40, c: 5, h: 10, alpha: 1 },
		'clamp alpha > 1'
	);
});

test('undefined', t => {
	assert.equal(parse(undefined), undefined);
});

test('Issue #204', t => {
	assert.equal(parse('oklch(70% 0..1 156)'), undefined);
});

test('case-insensitive function names and keywords', t => {
	// Function names are ASCII case-insensitive in CSS.
	assert.deepEqual(parse('RGB(255 0 0)'), parse('rgb(255 0 0)'), 'RGB()');
	assert.deepEqual(
		parse('RGBA(255, 0, 0, 0.5)'),
		parse('rgba(255, 0, 0, 0.5)'),
		'RGBA() legacy'
	);
	assert.deepEqual(
		parse('HSL(120 50% 50%)'),
		parse('hsl(120 50% 50%)'),
		'HSL()'
	);
	assert.deepEqual(
		parse('HSLA(120, 50%, 50%, 0.5)'),
		parse('hsla(120, 50%, 50%, 0.5)'),
		'HSLA() legacy'
	);
	assert.deepEqual(parse('HWB(120 0% 0%)'), parse('hwb(120 0% 0%)'), 'HWB()');
	assert.deepEqual(parse('LAB(50 0 0)'), parse('lab(50 0 0)'), 'LAB()');
	assert.deepEqual(parse('LCH(50 40 30)'), parse('lch(50 40 30)'), 'LCH()');
	assert.deepEqual(
		parse('OkLCH(0.5 0.1 30)'),
		parse('oklch(0.5 0.1 30)'),
		'OkLCH() (mixed case)'
	);

	// Color-space identifiers inside color() are case-insensitive too.
	assert.deepEqual(
		parse('COLOR(DISPLAY-P3 1 0 0)'),
		parse('color(display-p3 1 0 0)'),
		'color() with uppercase profile'
	);

	// Hue angle units are case-insensitive, in both modern and legacy syntax.
	assert.deepEqual(
		parse('hsl(120DEG 50% 50%)'),
		parse('hsl(120deg 50% 50%)'),
		'uppercase hue unit (modern)'
	);
	assert.deepEqual(
		parse('hsl(0.5TURN, 50%, 50%)'),
		parse('hsl(0.5turn, 50%, 50%)'),
		'uppercase hue unit (legacy)'
	);

	// The `transparent` keyword is case-insensitive.
	assert.deepEqual(
		parse('TRANSPARENT'),
		{ mode: 'rgb', r: 0, g: 0, b: 0, alpha: 0 },
		'TRANSPARENT'
	);
});

test('color() with a non-profile identifier returns undefined', t => {
	// Identifiers inherited from Object.prototype must not resolve to a
	// truthy value in the color-space lookup (and must not throw).
	assert.equal(parse('color(__proto__ 1 0 0)'), undefined, '__proto__');
	assert.equal(parse('color(constructor 1 0 0)'), undefined, 'constructor');
	assert.equal(parse('color(CONSTRUCTOR 1 0 0)'), undefined, 'CONSTRUCTOR');
	assert.equal(parse('color(toString 1 0 0)'), undefined, 'toString');
});

test('parseTransparent accepts absent colors', t => {
	assert.equal(parseTransparent(), undefined);
	assert.equal(parseTransparent(null), undefined);
	assert.equal(parseTransparent(''), undefined);
	assert.equal(parseTransparent('red'), undefined);
	assert.deepEqual(parseTransparent('TrAnSpArEnT'), {
		mode: 'rgb',
		r: 0,
		g: 0,
		b: 0,
		alpha: 0
	});
});

test('case-insensitive keywords and exponential notation', t => {
	assert.deepEqual(parse('  RGB(1E2 NoNe 0 / NoNe)  '), {
		mode: 'rgb',
		r: 100 / 255,
		b: 0
	});
});

test('case-insensitive hue units in modern and legacy syntax', t => {
	for (const unit of ['DEG', 'RAD', 'GRAD', 'TURN']) {
		for (const separator of [' ', ', ']) {
			const color = `HSL(0.5${unit}${separator}50%${separator}50%)`;
			assert.deepEqual(parse(color), parse(color.toLowerCase()), color);
		}
	}
});
