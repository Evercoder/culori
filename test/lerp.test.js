import test from 'node:test';
import assert from 'node:assert';
import { lerp, unlerp, trilerp } from '../src/index.js';

test('lerp()', t => {
	assert.equal(lerp(10, 2, 0.5), 6);
});

test('unlerp()', t => {
	assert.equal(unlerp(5, 10, 2.5), -0.5);
});

const RYB_CUBE = [
	{ mode: 'rgb', r: 1, g: 1, b: 1 }, // white
	{ mode: 'rgb', r: 1, g: 0, b: 0 }, // red
	{ mode: 'rgb', r: 1, g: 1, b: 0 }, // yellow
	{ mode: 'rgb', r: 1, g: 0.5, b: 0 }, // orange
	{ mode: 'rgb', r: 0.163, g: 0.373, b: 0.6 }, // blue
	{ mode: 'rgb', r: 0.5, g: 0, b: 0.5 }, // violet
	{ mode: 'rgb', r: 0, g: 0.66, b: 0.2 }, // green
	{ mode: 'rgb', r: 0.2, g: 0.094, b: 0 } // black
];

test('trilerp()', t => {
	const RYB_COLOR = [1, 0.5, 0.25];
	const EXPECTED_LINEAR = {
		mode: 'rgb',
		r: 0.8375,
		g: 0.19924999999999998,
		b: 0.0625
	};
	const EXPECTED_BIASED = {
		mode: 'rgb',
		r: 0.8984375,
		g: 0.21828124999999998,
		b: 0.0390625
	};

	function ryb2rgb(coords, bias = true) {
		const biased_coords = bias
			? coords.map(t => t * t * (3 - 2 * t))
			: coords;
		return {
			mode: 'rgb',
			r: trilerp(...RYB_CUBE.map(it => it.r), ...biased_coords),
			g: trilerp(...RYB_CUBE.map(it => it.g), ...biased_coords),
			b: trilerp(...RYB_CUBE.map(it => it.b), ...biased_coords)
		};
	}

	assert.deepEqual(ryb2rgb(RYB_COLOR, false), EXPECTED_LINEAR, 'ryb: linear');
	assert.deepEqual(ryb2rgb(RYB_COLOR), EXPECTED_BIASED, 'ryb: biased');
});
