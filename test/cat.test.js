import tape from 'tape';
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

tape('rgb -> xyz50 = rgb -> xyz65 -> xyz50', t => {
	colors.forEach(c => {
		t.ok(sameXYZ(xyz50(rgb(c)), xyz50(xyz65(rgb(c)))), c);
	});
	t.end();
});

tape('rgb -> xyz50 -> rgb = rgb -> xyz50 -> xyz65 -> rgb', t => {
	colors.forEach(c => {
		t.ok(sameRGB(rgb(xyz50(rgb(c))), rgb(xyz65(xyz50(rgb(c))))), c);
	});
	t.end();
});
