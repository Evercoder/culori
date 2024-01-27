import test from 'node:test';
import assert from 'node:assert';
import {
	parse,
	formatHex,
	formatHex8,
	formatRgb,
	formatHsl,
	formatCss
} from '../src/index.js';

test('parse "none" keyword', t => {
	assert.deepEqual(
		parse('rgb(none, 255, 127.5)'),
		undefined,
		'rgb() <number> (legacy)'
	);
	assert.deepEqual(
		parse('rgb(none 255 127.5 / none)'),
		{ mode: 'rgb', g: 1, b: 0.5 },
		'rgb() <number>'
	);
	assert.deepEqual(
		parse('rgb(none, 100%, 50%)'),
		undefined,
		'rgb() <percentage> (legacy)'
	);
	assert.deepEqual(
		parse('rgba(none 100% 50% / none)'),
		{ mode: 'rgb', g: 1, b: 0.5 },
		'rgb() <percentage>'
	);
	assert.deepEqual(
		parse('hsl(none, 50%, 100%)'),
		undefined,
		'hsl() (legacy)'
	);
	assert.deepEqual(
		parse('hsla(none 50% none)'),
		{ mode: 'hsl', s: 0.5 },
		'hsl()'
	);

	assert.deepEqual(
		parse('hwb(none none 50% / none)'),
		{ mode: 'hwb', b: 0.5 },
		'hwb()'
	);

	assert.deepEqual(
		parse('lab(none 12 none)'),
		{ mode: 'lab', a: 12 },
		'lab()'
	);

	assert.deepEqual(
		parse('lch(5% none 1turn)'),
		{ mode: 'lch', l: 5, h: 360 },
		'lch()'
	);

	assert.deepEqual(
		parse('color(display-p3 none none none / 0.1)'),
		{ mode: 'p3', alpha: 0.1 },
		'color()'
	);
});

test('serialize "none" keyword', t => {
	assert.equal(
		formatRgb('rgb(none none none / none)'),
		'rgb(0, 0, 0)',
		'formatRgb'
	);
	assert.equal(
		formatHex('rgb(none none none / none)'),
		'#000000',
		'formatHex'
	);
	assert.equal(
		formatHex8('rgb(none none none / none)'),
		'#000000ff',
		'formatHex8'
	);
	assert.equal(
		formatHsl('hsl(none none none / none)'),
		'hsl(0, 0%, 0%)',
		'formatHsl'
	);
	assert.equal(
		formatCss('hsl(none none none)'),
		'hsl(none none none)',
		'formatCss(hsl)'
	);
	assert.equal(
		formatCss('lab(none none none / none)'),
		'lab(none none none)',
		'formatCss(lab)'
	);
	assert.equal(
		formatCss('lch(none none none / none)'),
		'lch(none none none)',
		'formatCss(lch)'
	);

	assert.equal(
		formatCss('oklab(none none none / none)'),
		'oklab(none none none)',
		'formatCss(oklab)'
	);
	assert.equal(
		formatCss('oklch(none none none / none)'),
		'oklch(none none none)',
		'formatCss(oklch)'
	);
});
