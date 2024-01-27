import test from 'node:test';
import assert from 'node:assert';
import { xyz50, rgb, formatCss } from '../src/index.js';

test('xyz50', t => {
	assert.deepEqual(
		xyz50('white'),
		{
			mode: 'xyz50',
			x: 0.9642956660812442,
			y: 1.0000000361162846,
			z: 0.8251045485672053
		},
		'white'
	);
	assert.deepEqual(xyz50('black'), { mode: 'xyz50', x: 0, y: 0, z: 0 });
	assert.deepEqual(
		xyz50('red'),
		{
			mode: 'xyz50',
			x: 0.436065742824811,
			y: 0.22249319175623702,
			z: 0.013923904500943465
		},
		'red'
	);
	assert.deepEqual(
		xyz50('#00cc0080'),
		{
			mode: 'xyz50',
			x: 0.23256498648213272,
			y: 0.43287600197031817,
			z: 0.05862033437620246,
			alpha: 0.5019607843137255
		},
		'#00cc0080'
	);
});

test('color(xyz-d50)', t => {
	assert.deepEqual(xyz50('color(xyz-d50 1 0 0 / 0.25)'), {
		x: 1,
		y: 0,
		z: 0,
		alpha: 0.25,
		mode: 'xyz50'
	});
	assert.deepEqual(xyz50('color(xyz-d50 0% 50% 0.5 / 25%)'), {
		x: 0,
		y: 0.5,
		z: 0.5,
		alpha: 0.25,
		mode: 'xyz50'
	});
});

test('color(--xyz-d50)', t => {
	assert.deepEqual(xyz50('color(--xyz-d50 1 0 0 / 0.25)'), undefined);
});

test('formatCss', t => {
	assert.equal(
		formatCss('color(xyz-d50 0% 50% 0.5 / 25%)'),
		'color(xyz-d50 0 0.5 0.5 / 0.25)'
	);
});

test('missing components', t => {
	assert.ok(rgb('color(xyz-d50 none 0.5 none)'), 'xyz50 to rgb is ok');
	assert.deepEqual(
		rgb('color(xyz-d50 none 0.5 none)'),
		rgb('color(xyz-d50 0 0.5 0')
	);
	assert.ok(xyz50('rgb(none 100 20)'), 'rgb to xyz50 is ok');
	assert.deepEqual(xyz50('rgb(none 100 20)'), xyz50('rgb(0 100 20)'));
});
