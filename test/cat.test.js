import test from 'node:test';
import assert from 'node:assert';
import { xyz65, xyz50, rgb } from '../src/index.js';

let colors = ['red', 'green', 'blue', 'white', 'black', 'magenta', 'tomato'];
let e = 1e-14;

let sameXYZ = (a, b) => {
	return (
		a.mode === b.mode &&
		Math.abs(a.x - b.x) < e &&
		Math.abs(a.y - b.y) < e &&
		Math.abs(a.z - b.z) < e
	);
};

let sameRGB = (a, b) => {
	return (
		a.mode === b.mode &&
		Math.abs(a.r - b.r) < e &&
		Math.abs(a.g - b.g) < e &&
		Math.abs(a.b - b.b) < e
	);
};

test('rgb -> xyz50 = rgb -> xyz65 -> xyz50', t => {
	colors.forEach(c => {
		assert.ok(sameXYZ(xyz50(rgb(c)), xyz50(xyz65(rgb(c)))), c);
	});
});

test('rgb -> xyz50 -> rgb = rgb -> xyz50 -> xyz65 -> rgb', t => {
	colors.forEach(c => {
		assert.ok(sameRGB(rgb(xyz50(rgb(c))), rgb(xyz65(xyz50(rgb(c))))), c);
	});
});
