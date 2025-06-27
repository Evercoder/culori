import test from 'node:test';
import assert from 'node:assert';
import { okhsv, rgb, formatHex, formatCss } from '../src/index.js';

test('rgb → okhsv', t => {
	assert.equal(
		formatCss(okhsv('red')),
		'color(--okhsv 29.233880279627854 0.9995219665357181 0.9999999999999998)',
		'red'
	);
	assert.equal(
		formatCss(okhsv('white')),
		'color(--okhsv none 0 1.0000000000000004)',
		'white'
	);
	assert.equal(formatCss(okhsv('black')), 'color(--okhsv none 0 0)', 'black');
	assert.equal(
		formatCss(okhsv('#3333')),
		'color(--okhsv none 0 0.22099507377330885 / 0.2)',
		'#333'
	);
});

test('okhsv → rgb', t => {
	assert.equal(
		formatHex(
			'color(--okhsv 29.233885192342633 0.9995219692256989 1.0000000001685625)'
		),
		'#ff0000',
		'red'
	);
	assert.equal(
		formatHex('color(--okhsv 0 0 0.9999999923961898)'),
		'#ffffff',
		'white'
	);
	assert.equal(formatHex('color(--okhsv 0 0 0)'), '#000000', 'black');
	assert.equal(
		formatHex('color(--okhsv 0 0 0.2209950715093747 / 0.2)'),
		'#333333',
		'#333'
	);
	assert.equal(
		formatHex('color(--okhsv 0 1 1)'),
		'#ff0088',
		'color(--okhsv 0 1 1)'
	);
	assert.equal(
		formatHex('color(--okhsv 0 1 0)'),
		'#000000',
		'color(--okhsv 0 1 0)'
	);
});

test('rgb → okhsv → rgb', t => {
	assert.equal(formatHex(okhsv('red')), '#ff0000', 'red');
	assert.equal(formatHex(okhsv('white')), '#ffffff', 'white');
	assert.equal(formatHex(okhsv('black')), '#000000', 'black');
	assert.equal(formatHex(okhsv('#3333')), '#333333', '#333');
});

test('missing components', t => {
	assert.ok(rgb('color(--okhsv none 0.5 none)'));
	assert.deepEqual(
		rgb('color(--okhsv none 0.5 none)'),
		rgb('color(--okhsv 0 0.5 0)')
	);
	assert.ok(okhsv('rgb(none 100 20)'));
	assert.deepEqual(okhsv('rgb(none 100 20)'), okhsv('rgb(0 100 20)'));
});
