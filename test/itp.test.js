import test from 'node:test';
import assert from 'node:assert';
import { formatCss, formatHex, itp } from '../src/index.js';

test('itp', t => {
	assert.deepEqual(
		itp('white'),
		{
			mode: 'itp',
			i: 0.5806888810416109,
			t: 1.1102230246251565e-16,
			p: 2.914335439641036e-16
		},
		'white'
	);
	assert.deepEqual(
		itp('black'),
		{
			mode: 'itp',
			i: 7.309559025783966e-7,
			t: -2.117582368135751e-22,
			p: 1.3234889800848443e-23
		},
		'black'
	);
	assert.deepEqual(
		itp('red'),
		{
			mode: 'itp',
			i: 0.4278802843622844,
			t: -0.11570435976969046,
			p: 0.27872894737532694
		},
		'red'
	);
});

test('color(--ictcp)', t => {
	assert.deepEqual(itp('color(--ictcp 1 0 0 / 0.25)'), {
		mode: 'itp',
		i: 1,
		t: 0,
		p: 0,
		alpha: 0.25
	});
	assert.deepEqual(itp('color(--ictcp 0% 50% 0.5 / 25%)'), {
		mode: 'itp',
		i: 0,
		t: 0.5,
		p: 0.5,
		alpha: 0.25
	});
});

test('formatCss', t => {
	assert.equal(
		formatCss('color(--ictcp 0% 50% 0.5 / 25%)'),
		'color(--ictcp 0 0.5 0.5 / 0.25)'
	);
});

test('formatCss', t => {
	assert.equal(
		formatHex({
			mode: 'itp',
			i: 0.4278802843622844,
			t: -0.11570435976969046,
			p: 0.27872894737532694
		}),
		'#ff0000',
		'red'
	);
});
