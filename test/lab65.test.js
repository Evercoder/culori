import test from 'node:test';
import assert from 'node:assert';
import { lab65, rgb, formatCss } from '../src/index.js';

test('lab65', t => {
	assert.deepEqual(
		lab65('white'),
		{ mode: 'lab65', l: 100, a: 0, b: 0 },
		'white'
	);

	// Tests that achromatic RGB colors get a = b = 0 in CIELab D65
	assert.deepEqual(
		lab65('#111'),
		{ mode: 'lab65', l: 5.063329493432597, a: 0, b: 0 },
		'#111'
	);

	assert.deepEqual(
		lab65('black'),
		{ mode: 'lab65', l: 0, a: 0, b: 0 },
		'black'
	);
	assert.deepEqual(
		lab65('red'),
		{
			mode: 'lab65',
			l: 53.237115595429344,
			a: 80.09011352310385,
			b: 67.20326351172214
		},
		'red'
	);
});

test('color(--lab-d65)', t => {
	assert.deepEqual(lab65('color(--lab-d65 30 0.5 1 / 0.25)'), {
		l: 30,
		a: 0.5,
		b: 1,
		alpha: 0.25,
		mode: 'lab65'
	});
});

test('formatCss', t => {
	assert.equal(
		formatCss('color(--lab-d65 30 0.5 1 / 0.25)'),
		'color(--lab-d65 30 0.5 1 / 0.25)'
	);
});

test('missing components', t => {
	assert.ok(rgb('color(--lab-d65 none 0.5 none)'), 'lab65 to rgb is ok');
	assert.deepEqual(
		rgb('color(--lab-d65 none 0.5 none)'),
		rgb('color(--lab-d65 0 0.5 0)')
	);
	assert.ok(lab65('rgb(none 100 20)'), 'rgb to lab65 is ok');
	assert.deepEqual(lab65('rgb(none 100 20)'), lab65('rgb(0 100 20)'));
});
