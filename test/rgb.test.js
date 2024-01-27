import test from 'node:test';
import assert from 'node:assert';
import { rgb, formatHex, formatCss } from '../src/index.js';

test('rgb(Specifier)', t => {
	assert.deepEqual(formatHex(rgb('#ffffff')), '#ffffff');

	assert.deepEqual(
		rgb('tomato'),
		{ r: 1, g: 0.38823529411764707, b: 0.2784313725490196, mode: 'rgb' },
		'named color'
	);

	assert.deepEqual(
		rgb('rgb(255, 0, 0)'),
		{ r: 1, g: 0, b: 0, mode: 'rgb' },
		'rgb()'
	);

	assert.deepEqual(
		rgb('rgba(255, 0, 0)'),
		{ r: 1, g: 0, b: 0, mode: 'rgb' },
		'rgba()'
	);

	assert.deepEqual(
		rgb('rgb(100%, 0%, 0%)'),
		{ r: 1, g: 0, b: 0, mode: 'rgb' },
		'rgb()'
	);

	assert.deepEqual(
		rgb('rgba(100%, 0%, 0%)'),
		{ r: 1, g: 0, b: 0, mode: 'rgb' },
		'rgba()'
	);
});

test('rgb(Object)', t => {
	assert.deepEqual(
		rgb({ r: 1, g: 0, b: 0 }),
		{ r: 1, g: 0, b: 0, mode: 'rgb' },
		'red'
	);

	assert.deepEqual(
		rgb({ r: 0.1, g: 0.2, b: 0.3, alpha: 0.4 }),
		{ r: 0.1, g: 0.2, b: 0.3, alpha: 0.4, mode: 'rgb' },
		'floating point'
	);
});

test('color(srgb)', t => {
	assert.deepEqual(
		rgb('color(srgb 1 0 0 / 0.25)'),
		{
			r: 1,
			g: 0,
			b: 0,
			alpha: 0.25,
			mode: 'rgb'
		},
		'color(srgb 1 0 0 / 0.25)'
	);
	assert.deepEqual(rgb('color(srgb 0% 50% 0.5 / 25%)'), {
		r: 0,
		g: 0.5,
		b: 0.5,
		alpha: 0.25,
		mode: 'rgb'
	});
});

test('formatCss', t => {
	assert.equal(
		formatCss(rgb('color(srgb 1 0 0.5/1)')),
		'color(srgb 1 0 0.5)',
		'color(srgb 1 0 0.5/1)'
	);
});

/*
	See: https://emnudge.dev/blog/perfect-rgb-regex/
*/
test('exotic species', t => {
	assert.equal(
		formatCss(rgb('rgb(1-2-3)')),
		'color(srgb 0.00392156862745098 -0.00784313725490196 -0.011764705882352941)'
	);
	assert.equal(
		formatCss(rgb('rgb(1-.2.3)')),
		'color(srgb 0.00392156862745098 -0.0007843137254901962 0.001176470588235294)'
	);
	assert.equal(
		formatCss(rgb('rgb(1 .2.3)')),
		'color(srgb 0.00392156862745098 0.0007843137254901962 0.001176470588235294)'
	);
	assert.equal(
		formatCss(rgb('rgb(.1.2.3)')),
		'color(srgb 0.0003921568627450981 0.0007843137254901962 0.001176470588235294)'
	);
	assert.equal(formatCss(rgb('rgb(1.2.3)')), undefined);
});
