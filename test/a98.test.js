import test from 'node:test';
import assert from 'node:assert';
import { a98, rgb, formatCss } from '../src/index.js';

test('a98', t => {
	assert.deepEqual(
		a98('white'),
		{ mode: 'a98', r: 0.9999999999999999, g: 1, b: 1.0000000000000002 },
		'white'
	);
	assert.deepEqual(a98('black'), { mode: 'a98', r: 0, g: 0, b: 0 }, 'black');
	assert.deepEqual(
		a98('red'),
		{
			mode: 'a98',
			r: 0.8585916022954421,
			g: -5.533624232798453e-8,
			b: 2.1612063668957067e-8
		},
		'red'
	);
});

test('color(a98-rgb)', t => {
	assert.deepEqual(a98('color(a98-rgb 1 0 0 / 0.25)'), {
		r: 1,
		g: 0,
		b: 0,
		alpha: 0.25,
		mode: 'a98'
	});
	assert.deepEqual(a98('color(a98-rgb 0% 50% 0.5 / 25%)'), {
		r: 0,
		g: 0.5,
		b: 0.5,
		alpha: 0.25,
		mode: 'a98'
	});
});

test('formatCss', t => {
	assert.equal(
		formatCss('color(a98-rgb 0% 50% 0.5 / 25%)'),
		'color(a98-rgb 0 0.5 0.5 / 0.25)'
	);
});

test('missing components', t => {
	assert.ok(rgb('color(a98-rgb none 0.5 none)'), 'a98 to rgb is ok');
	assert.deepEqual(
		rgb('color(a98-rgb none 0.5 none)'),
		rgb('color(a98-rgb 0 0.5 0')
	);
	assert.ok(a98('rgb(none 100 20)'), 'rgb to a98 is ok');
	assert.deepEqual(a98('rgb(none 100 20)'), a98('rgb(0 100 20)'));
});
