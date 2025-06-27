import test from 'node:test';
import assert from 'node:assert';
import { okhsl, rgb, formatHex, formatCss } from '../src/index.js';

test('rgb → okhsl', t => {
	assert.equal(
		formatCss(okhsl('red')),
		'color(--okhsl 29.233880279627854 1.0000000007111225 0.5680846563197034)',
		'red'
	);
	assert.equal(
		formatCss(okhsl('white')),
		'color(--okhsl none 0 1.0000000000000002)',
		'white'
	);
	assert.equal(formatCss(okhsl('black')), 'color(--okhsl none 0 0)', 'black');
	assert.equal(
		formatCss(okhsl('#3333')),
		'color(--okhsl none 0 0.2209950737733088 / 0.2)',
		'#333'
	);
});

test('okhsl → rgb', t => {
	assert.equal(
		formatHex(
			'color(--okhsl 29.233885192342633 1.0000000001433997 0.5680846525040862)'
		),
		'#ff0000',
		'red'
	);
	assert.equal(
		formatHex('color(--okhsl 0 0 0.9999999923961898)'),
		'#ffffff',
		'white'
	);
	assert.equal(formatHex('color(--okhsl 0 0 0)'), '#000000', 'black');
	assert.equal(
		formatHex('color(--okhsl 0 0 0.2209950715093747 / 0.2)'),
		'#333333',
		'#333'
	);
	assert.deepEqual(
		formatHex('color(--okhsl 0 1 1)'),
		'#ffffff',
		'color(--okhsl 0 1 1)'
	);
	assert.equal(
		formatHex('color(--okhsl 0 1 0)'),
		'#000000',
		'color(--okhsl 0 1 0)'
	);
});

test('rgb → okhsl → rgb', t => {
	assert.equal(formatHex(okhsl('red')), '#ff0000', 'red');
	assert.equal(formatHex(okhsl('white')), '#ffffff', 'white');
	assert.equal(formatHex(okhsl('black')), '#000000', 'black');
	assert.equal(formatHex(okhsl('#3333')), '#333333', '#333');
});

test('missing components', t => {
	assert.ok(rgb('color(--okhsl none 0.5 none)'));
	assert.deepEqual(
		rgb('color(--okhsl none 0.5 none)'),
		rgb('color(--okhsl 0 0.5 0)')
	);
	assert.ok(okhsl('rgb(none 100 20)'));
	assert.deepEqual(okhsl('rgb(none 100 20)'), okhsl('rgb(0 100 20)'));
});
