import test from 'node:test';
import assert from 'node:assert';
import { yiq, rgb, formatRgb, formatCss } from '../src/index.js';

test('rgb -> yiq', t => {
	assert.deepEqual(yiq('purple'), {
		mode: 'yiq',
		y: 0.20749931419607845,
		i: 0.13762565019607842,
		q: 0.26233329443137254
	});
});

test('rgb -> yiq -> rgb', t => {
	assert.deepEqual(
		formatRgb(yiq('rgb(255, 255, 255)')),
		'rgb(255, 255, 255)',
		'white'
	);

	assert.deepEqual(formatRgb(yiq('rgb(0, 0, 0)')), 'rgb(0, 0, 0)', 'black');
	assert.deepEqual(formatRgb(yiq('rgb(100, 0, 0)')), 'rgb(100, 0, 0)', 'red');
	assert.deepEqual(
		formatRgb(yiq('rgb(0, 120, 0)')),
		'rgb(0, 120, 0)',
		'blue'
	);
	assert.deepEqual(formatRgb(yiq('rgb(0, 0, 89)')), 'rgb(0, 0, 89)', 'green');
});

test('color(--yiq)', t => {
	assert.deepEqual(yiq('color(--yiq 1 0 0 / 0.25)'), {
		y: 1,
		i: 0,
		q: 0,
		alpha: 0.25,
		mode: 'yiq'
	});
	assert.deepEqual(yiq('color(--yiq 0% 50% 0.5 / 25%)'), {
		y: 0,
		i: 0.5,
		q: 0.5,
		alpha: 0.25,
		mode: 'yiq'
	});
});

test('formatCss', t => {
	assert.equal(
		formatCss('color(--yiq 0% 50% 0.5 / 25%)'),
		'color(--yiq 0 0.5 0.5 / 0.25)'
	);
});

test('missing components', t => {
	assert.ok(rgb('color(--yiq none 0.5 none)'), 'yiq to rgb is ok');
	assert.deepEqual(
		rgb('color(--yiq none 0.5 none)'),
		rgb('color(--yiq 0 0.5 0')
	);
	assert.ok(yiq('rgb(none 100 20)'), 'rgb to yiq is ok');
	assert.deepEqual(yiq('rgb(none 100 20)'), yiq('rgb(0 100 20)'));
});
