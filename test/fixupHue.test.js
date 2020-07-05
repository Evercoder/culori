import tape from 'tape';
import {
	fixupHueShorter,
	fixupHueLonger,
	fixupHueIncreasing,
	fixupHueDecreasing
} from '../src/index';

tape('fixupHueShorter', t => {
	let hues = [0, 340, 30, 0, 170];
	t.deepEqual(fixupHueShorter(hues), [0, -20, 30, 0, 170]);
	t.end();
});

tape('fixupHueLonger', t => {
	let hues = [0, 340, 30, 0, 170];
	t.deepEqual(fixupHueLonger(hues), [0, 340, 30, 360, 170]);
	t.end();
});

tape('fixupHueIncreasing', t => {
	let hues = [0, 340, 30, 0, 170];
	t.deepEqual(fixupHueIncreasing(hues), [0, 340, 390, 720, 890]);
	t.end();
});

tape('fixupHueDecreasing', t => {
	let hues = [0, 340, 30, 0, 170];
	t.deepEqual(fixupHueDecreasing(hues), [0, -20, -330, -360, -550]);
	t.end();
});
