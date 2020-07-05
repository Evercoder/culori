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
	t.deepEqual(fixupHueLonger(hues), [0, 340, 30, 360, 190]);
	t.end();
});

tape('fixupHueIncreasing', t => {
	let hues = [0, 340, 30, 0, 170];
	t.deepEqual(fixupHueIncreasing(hues), [0, 340, 670, 1030, 1220]);
	t.end();
});

tape('fixupHueDecreasing', t => {
	let hues = [0, 340, 30, 0, 170];
	t.deepEqual(fixupHueDecreasing(hues), [0, -20]);
	t.end();
});
