import test from 'node:test';
import assert from 'node:assert';
import {
	filterBrightness,
	filterContrast,
	filterSepia,
	formatHex,
	filterSaturate,
	filterGrayscale,
	filterInvert,
	filterHueRotate
} from '../src/index.js';

test('filterBrightness', t => {
	assert.deepEqual(
		filterBrightness(1)('hsl(60 100% 50% / 25%)'),
		{ mode: 'hsl', h: 60, s: 1, l: 0.5, alpha: 0.25 },
		'unchanged in the original color space'
	);
	assert.equal(
		formatHex(filterBrightness(2)('#003366')),
		'#0066cc',
		'brightens the color'
	);
});

test('filterContrast', t => {
	assert.equal(
		formatHex(filterContrast(2)('#003366')),
		'#00004d',
		'Increases the contrast'
	);
});

test('filterSepia', t => {
	assert.equal(formatHex(filterSepia(0)('red')), '#ff0000', 'unchanged');
	assert.equal(formatHex(filterSepia(1)('red')), '#645945', 'fully sepia');
});

test('filterSaturate', t => {
	assert.equal(
		formatHex(filterSaturate(0)('#cc0033')),
		'#2f2f2f',
		'fully desaturated'
	);
	assert.equal(
		formatHex(filterSaturate(1)('#cc0033')),
		'#cc0033',
		'unchanged'
	);
	assert.equal(
		formatHex(filterSaturate(2)('#cc0033')),
		'#ff0037',
		'oversaturated'
	);
});

test('filterGrayscale', t => {
	assert.equal(formatHex(filterGrayscale(0)('red')), '#ff0000', 'unchanged');
	assert.equal(
		formatHex(filterGrayscale(1)('red')),
		'#363636',
		'fully grayscale'
	);
});

test('filterInvert', t => {
	assert.equal(formatHex(filterInvert(0)('red')), '#ff0000', 'unchanged');
	assert.equal(formatHex(filterInvert(0.5)('red')), '#808080', 'gray');
	assert.equal(
		formatHex(filterInvert(1)('red')),
		'#00ffff',
		'fully inverted'
	);
});

test('filterHueRotate', t => {
	assert.equal(formatHex(filterHueRotate(60)('red')), '#6c3b00');
});
