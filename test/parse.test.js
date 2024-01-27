import test from 'node:test';
import assert from 'node:assert';
import { parse } from '../src/index.js';

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
