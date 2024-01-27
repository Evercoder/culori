import test from 'node:test';
import assert from 'node:assert';
import { xyb, rgb, formatRgb, formatCss } from '../src/index.js';

test('rgb -> xyb', t => {
	assert.deepEqual(xyb('purple'), {
		mode: 'xyb',
		x: 0.013838974535428816,
		y: 0.27055837298918495,
		b: 0.1333134464452821
	});
});

test('rgb -> xyb -> rgb', t => {
	assert.deepEqual(
		formatRgb(xyb('rgb(255, 255, 255)')),
		'rgb(255, 255, 255)',
		'white'
	);

	assert.deepEqual(formatRgb(xyb('rgb(0, 0, 0)')), 'rgb(0, 0, 0)', 'black');
	assert.deepEqual(formatRgb(xyb('rgb(100, 0, 0)')), 'rgb(100, 0, 0)', 'red');
	assert.deepEqual(
		formatRgb(xyb('rgb(0, 120, 0)')),
		'rgb(0, 120, 0)',
		'blue'
	);
	assert.deepEqual(formatRgb(xyb('rgb(0, 0, 89)')), 'rgb(0, 0, 89)', 'green');
});

test('color(--xyb)', t => {
	assert.deepEqual(xyb('color(--xyb 1 0 0 / 0.25)'), {
		x: 1,
		y: 0,
		b: 0,
		alpha: 0.25,
		mode: 'xyb'
	});
	assert.deepEqual(xyb('color(--xyb 0% 50% 0.5 / 25%)'), {
		x: 0,
		y: 0.5,
		b: 0.5,
		alpha: 0.25,
		mode: 'xyb'
	});
});

test('formatCss', t => {
	assert.equal(
		formatCss('color(--xyb 0% 50% 0.5 / 25%)'),
		'color(--xyb 0 0.5 0.5 / 0.25)'
	);
});

test('missing components', t => {
	assert.ok(rgb('color(--xyb none 0.5 none)'), 'xyb to rgb is ok');
	assert.deepEqual(
		rgb('color(--xyb none 0.5 none)'),
		rgb('color(--xyb 0 0.5 0')
	);
	assert.ok(xyb('rgb(none 100 20)'), 'rgb to xyb is ok');
	assert.deepEqual(xyb('rgb(none 100 20)'), xyb('rgb(0 100 20)'));
});
