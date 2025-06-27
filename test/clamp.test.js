import test from 'node:test';
import assert from 'node:assert';
import {
	clampChroma,
	displayable,
	inGamut,
	clampRgb,
	clampGamut,
	formatCss,
	toGamut,
	lch
} from '../src/index.js';

test('RGB', t => {
	assert.equal(displayable({ mode: 'rgb', r: 0, g: 0, b: 0 }), true);
	assert.equal(
		displayable({ mode: 'rgb', r: 1, g: 1, b: 1, alpha: 0.5 }),
		true
	);
	assert.equal(
		displayable({ mode: 'rgb', r: 1.1, g: 1, b: 1, alpha: 0.5 }),
		false
	);
});

test('LCh', t => {
	assert.equal(displayable('lch(50% 0 0)'), true);
	assert.equal(displayable('lch(50% -100 0)'), true);
	assert.equal(displayable('lch(120% -100 0)'), false);
});

test('clampChroma (rgb)', t => {
	assert.deepEqual(clampChroma('red'), { mode: 'rgb', r: 1, g: 0, b: 0 });
	assert.deepEqual(clampChroma('rgb(300, 255, 255)'), {
		mode: 'rgb',
		r: 1,
		g: 1,
		b: 1
	});
});

test('clampChroma (lch)', t => {
	assert.deepEqual(clampChroma('lch(50% 120 5)'), {
		mode: 'lch',
		l: 50,
		c: 77.4609375,
		h: 5
	});
	assert.equal(displayable(clampChroma('lch(50% 120 5)')), true);
	assert.deepEqual(
		clampChroma({
			mode: 'lch',
			l: 0,
			c: 100,
			h: 30
		}),
		{
			mode: 'lch',
			l: 0,
			c: 0,
			h: 30
		},
		'for l = 0, only c = 0 is in gamut'
	);
});

test('Issue #129', t => {
	let color = {
		mode: 'lch',
		l: 44.01740616147086,
		c: 58.743630227529145,
		h: 180.30393476177233
	};
	assert.equal(displayable(clampChroma(color)), true);
	assert.equal(
		displayable(clampChroma({ mode: 'oklch', l: 0.5, c: 0.161, h: 180 })),
		true
	);

	assert.deepEqual(
		clampChroma({ mode: 'oklch', l: 0.5, c: 0.16, h: 180 }, 'oklch'),
		{ mode: 'oklch', l: 0.5, c: 0.090703125, h: 180 }
	);

	assert.equal(
		formatCss(clampChroma('lch(80% 150 60)', 'lch', 'p3')),
		'lch(80 60.040283203125 60)',
		'with p3 gamut'
	);
});

test('inGamut()', t => {
	assert.equal(
		inGamut('rec2020')('color(rec2020 1 1 0)'),
		true,
		'rec2020 in rec2020 gamut'
	);
	assert.equal(
		inGamut('p3')('color(rec2020 1 1 0)'),
		false,
		'rec2020 in p3 gamut'
	);
	assert.equal(
		inGamut('rgb')('color(rec2020 1 1 0)'),
		false,
		'rec2020 in rgb gamut'
	);

	assert.equal(
		inGamut('rec2020')('color(display-p3 1 1 0)'),
		true,
		'p3 in rec2020 gamut'
	);
	assert.equal(
		inGamut('p3')('color(display-p3 1 1 0)'),
		true,
		'p3 in p3 gamut'
	);
	assert.equal(
		inGamut('rgb')('color(display-p3 1 1 0)'),
		false,
		'p3 in rgb gamut'
	);

	assert.equal(inGamut('hsl')('color(srgb 1 1 0)'), true, 'in hsl gamut');
	assert.equal(
		inGamut('hsl')('color(srgb 1 1.1 0)'),
		false,
		'out of hsl gamut'
	);
});

test('clampGamut()', t => {
	const p3Color = 'color(display-p3 1 1 0)';

	assert.equal(
		formatCss(clampGamut('rgb')(p3Color)),
		'color(display-p3 0.9999999999999999 0.9999999999999997 0.3308973181805899)',
		'p3 color to rgb'
	);
	assert.equal(
		formatCss(clampGamut('p3')(p3Color)),
		'color(display-p3 1 1 0)',
		'p3 color to p3'
	);
	assert.equal(
		formatCss(clampGamut('rec2020')(p3Color)),
		'color(display-p3 1 1 0)',
		'p3 color to rec2020'
	);

	const crimson = 'color(display-p3 0.8 0.1 0.3)';
	const toRgb = clampGamut('rgb');

	assert.equal(
		formatCss(toRgb(crimson)),
		'color(display-p3 0.8015640173988641 0.16985582666875737 0.30217671004779834)',
		'api docs example'
	);
});

test('toGamut()', t => {
	assert.equal(
		formatCss(toGamut('rgb')({ mode: 'oklch', l: 1.5, c: 0.2, h: 180 })),
		'color(srgb 1 1 1)',
		'white'
	);
	assert.equal(
		formatCss(toGamut('rgb')({ mode: 'oklch', l: -1.5, c: 0.2, h: 180 })),
		'color(srgb 0 0 0)',
		'black'
	);
	assert.equal(
		formatCss(toGamut('rgb')('color(--lch-d65 100 0 180)')),
		'color(srgb 1 1 1)',
		'chroma = 0'
	);
	assert.equal(
		formatCss(toGamut('p3')('lch(80% 150 60)')),
		'color(display-p3 0.9999999999999999 0.6969234114981073 0.5084794107705369)',
		'api docs example'
	);

	const likeClampChroma = toGamut('rgb', 'lch', null);

	assert.deepEqual(lch(likeClampChroma('lch(50% 120 5)')), {
		mode: 'lch',
		l: 50.00519612994975,
		c: 77.47625128342412,
		h: 5.006331789592595
	});

	assert.throws(() => toGamut('rgb', 'lab'));
});

test('missing components', t => {
	assert.ok(displayable('rgb(none none none)'), 'displayable');

	assert.ok(inGamut('p3')('color(display-p3 none none none)'), 'inGamut');

	assert.deepEqual(
		clampRgb('rgb(none 300 none)'),
		{
			mode: 'rgb',
			r: 0,
			g: 1,
			b: 0
		},
		'clampRgb'
	);

	assert.deepEqual(
		clampGamut('p3')('color(display-p3 none 3 none)'),
		{
			mode: 'p3',
			r: 0,
			g: 1,
			b: 0
		},
		'clampGamut'
	);

	assert.deepEqual(
		clampChroma({
			mode: 'lch',
			l: 120
		}),
		{
			mode: 'lch',
			l: 100.00000139649632,
			c: 0
		},
		'clampChroma, lch color (no conversion)'
	);

	assert.deepEqual(
		clampChroma('color(srgb 1.1 none none)'),
		{
			mode: 'rgb',
			r: 0.9999762593315072,
			g: 0.3000275449561938,
			b: 0.17168509121325368
		},
		'clampChroma, rgb color'
	);

	assert.deepEqual(
		toGamut()({
			mode: 'lch',
			l: 120
		}),
		{ r: 1, g: 1, b: 1, mode: 'rgb' },
		'toGamut(), oklch color (no conversion)'
	);

	assert.deepEqual(
		toGamut()('color(srgb 1.1 none none)'),
		{
			mode: 'rgb',
			r: 0.9999999999999997,
			g: 0.2478080277701502,
			b: 0.18935505411180673
		},
		'toGamut(), rgb color'
	);
});
