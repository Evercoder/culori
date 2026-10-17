import test from 'node:test';
import assert from 'node:assert';
import { lp3, p3, rgb, xyz65, formatCss } from '../src/index.js';

test('lp3', t => {
	assert.deepEqual(lp3('black'), { mode: 'lp3', r: 0, g: 0, b: 0 }, 'black');
	let white = lp3('white');
	assert.ok(Math.abs(white.r - 1) < 1e-12, 'white r');
	assert.ok(Math.abs(white.g - 1) < 1e-12, 'white g');
	assert.ok(Math.abs(white.b - 1) < 1e-12, 'white b');
});

test('p3 <-> lp3 uses the sRGB transfer function', t => {
	assert.deepEqual(lp3({ mode: 'p3', r: 0.5, g: 0.25, b: 1, alpha: 0.5 }), {
		mode: 'lp3',
		r: 0.21404114048223255,
		g: 0.05087608817155679,
		b: 1,
		alpha: 0.5
	});
	let color = { mode: 'p3', r: 0.1, g: 0.25, b: 0.7 };
	assert.deepEqual(p3(lp3(color)), color, 'round-trip');
});

test('lp3 agrees with p3 through xyz65 and rgb', t => {
	let color = { mode: 'lp3', r: 0.2, g: 0.6, b: 0.05 };
	let close = (a, b, msg) => {
		assert.ok(Math.abs(a.r - b.r) < 1e-12, msg);
		assert.ok(Math.abs(a.g - b.g) < 1e-12, msg);
		assert.ok(Math.abs(a.b - b.b) < 1e-12, msg);
	};
	close(rgb(color), rgb(p3(color)), 'to rgb');
	let x1 = xyz65(color);
	let x2 = xyz65(p3(color));
	assert.ok(Math.abs(x1.x - x2.x) < 1e-12, 'to xyz65 x');
	assert.ok(Math.abs(x1.y - x2.y) < 1e-12, 'to xyz65 y');
	assert.ok(Math.abs(x1.z - x2.z) < 1e-12, 'to xyz65 z');
	close(lp3(rgb(color)), color, 'rgb round-trip');
});

test('color(display-p3-linear)', t => {
	assert.deepEqual(lp3('color(display-p3-linear 1 0 0 / 0.25)'), {
		r: 1,
		g: 0,
		b: 0,
		alpha: 0.25,
		mode: 'lp3'
	});
	assert.deepEqual(lp3('color(display-p3-linear 0% 50% 0.5 / 25%)'), {
		r: 0,
		g: 0.5,
		b: 0.5,
		alpha: 0.25,
		mode: 'lp3'
	});
});

test('formatCss', t => {
	assert.equal(
		formatCss('color(display-p3-linear 0% 50% 0.5 / 25%)'),
		'color(display-p3-linear 0 0.5 0.5 / 0.25)'
	);
});

test('missing components', t => {
	assert.ok(
		rgb('color(display-p3-linear none 0.5 none)'),
		'lp3 to rgb is ok'
	);
	assert.deepEqual(
		rgb('color(display-p3-linear none 0.5 none)'),
		rgb('color(display-p3-linear 0 0.5 0')
	);
	assert.ok(lp3('rgb(none 100 20)'), 'rgb to lp3 is ok');
	assert.deepEqual(lp3('rgb(none 100 20)'), lp3('rgb(0 100 20)'));
});
