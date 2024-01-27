import test from 'node:test';
import assert from 'node:assert';
import { hwb, rgb, formatCss } from '../src/index.js';

test('hwb() parses hwb CSS strings', t => {
	assert.deepEqual(
		hwb('hwb(100 0% 0%)'),
		{ h: 100, w: 0, b: 0, mode: 'hwb' },
		'black'
	);

	assert.deepEqual(
		hwb('hwb(200 150% 150%)'),
		{ h: 200, w: 1.5, b: 1.5, mode: 'hwb' },
		'grey'
	);

	assert.deepEqual(
		hwb('hwb(200 150% 50% / 50%)'),
		{ h: 200, w: 1.5, b: 0.5, mode: 'hwb', alpha: 0.5 },
		'grey (alpha [0-1])'
	);

	assert.deepEqual(
		hwb('hwb(200 150% 50% / .5)'),
		{ h: 200, w: 1.5, b: 0.5, mode: 'hwb', alpha: 0.5 },
		'grey (alpha percentage)'
	);
});

test('formatCss', t => {
	assert.equal(
		formatCss('hwb(200 150% 50% / .5)'),
		'hwb(200 150% 50% / 0.5)'
	);
	assert.equal(formatCss('hwb(200 150% 50% / 100%)'), 'hwb(200 150% 50%)');
	assert.equal(formatCss('hwb(200 150% 50%)'), 'hwb(200 150% 50%)');
	assert.equal(formatCss(hwb('#ffffff00')), 'hwb(none 100% 0% / 0)');
});

test('missing components', t => {
	assert.ok(rgb('hwb(none 50% none)'));
	assert.deepEqual(rgb('hwb(none 50% none)'), rgb('hwb(0deg 50% 0%'));
	assert.ok(hwb('rgb(none 100 20)'));
	assert.deepEqual(hwb('rgb(none 100 20)'), hwb('rgb(0 100 20)'));
});

test('powerless components', t => {
	assert.deepEqual(hwb(rgb('hwb(60deg 75% 50%)')), {
		mode: 'hwb',
		w: 0.6,
		b: 0.4
	});
});
