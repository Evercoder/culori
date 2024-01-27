import test from 'node:test';
import assert from 'node:assert';
import {
	mapper,
	mapAlphaMultiply,
	mapAlphaDivide,
	mapTransferLinear,
	mapTransferGamma,
	formatHex,
	formatHex8
} from '../src/index.js';

test('mapping alpha', t => {
	let multiply = mapper(mapAlphaMultiply);
	let divide = mapper(mapAlphaDivide);

	assert.equal(formatHex8(multiply('#ff00cc80')), '#80006680');
	assert.equal(formatHex8(divide(multiply('#ff00cc80'))), '#ff00cc80');
});

test('linear transfer function', t => {
	let brighten = mapper(mapTransferLinear(2));
	assert.equal(formatHex(brighten('#cc0033')), '#ff0066');
});

test('gamma transfer function', t => {
	let brighten = mapper(mapTransferGamma(2.2));
	assert.equal(formatHex(brighten('#cc0033')), '#ff0070');
});

test('mode = null', t => {
	let increaser = mapper(v => v + 0.1, null);
	assert.equal(
		formatHex(increaser('#cc0033')),
		'#e61a4d',
		'color is rgb string'
	);
	assert.equal(
		increaser({ mode: 'rgb', r: 0.8, g: 0, b: 0.2 }).mode,
		'rgb',
		'color is rgb'
	);
});

test('preserve_mode', t => {
	const rgbColor = { mode: 'rgb', r: 0.8, g: 0, b: 0.2 };
	const fn = v => v + 0.1;
	assert.equal(
		formatHex(mapper(fn, null, true)(rgbColor)),
		'#e61a4d',
		'mode = null, preserve_mode = true'
	);
	assert.equal(
		mapper(fn, undefined, true)('#cc0033').mode,
		'rgb',
		'mode = undefined, preserve_mode = true'
	);
	assert.equal(
		mapper(fn, 'hsl', true)('#cc0033').mode,
		'rgb',
		'mode = hsl, preserve_mode = true'
	);
	assert.equal(
		mapper(fn, 'hsl', false)('#cc0033').mode,
		'hsl',
		'mode = hsl, preserve_mode = false'
	);
	assert.equal(
		mapper(fn, 'oklch', false)('#cc0033').mode,
		'oklch',
		'mode = oklch, preserve_mode = false'
	);
	const oklchColor = {
		mode: 'oklch',
		alpha: 0.25,
		l: 30,
		c: 0.5,
		h: 1
	};
	assert.equal(
		mapper(fn, 'hsl', false)(oklchColor).mode,
		'hsl',
		'oklch color, mode = hsl, preserve_mode = false'
	);
	assert.equal(
		mapper(fn, 'hsl', true)(oklchColor).mode,
		'oklch',
		'oklch color, mode = hsl, preserve_mode = true'
	);
});
