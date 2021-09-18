import tape from 'tape';
import {
	fixupHueShorter,
	fixupHueLonger,
	fixupHueIncreasing,
	fixupHueDecreasing
} from '../src/index.js';

tape('fixupHueShorter', t => {
	t.deepEqual(fixupHueShorter([0, 340, 30, 0, 170]), [0, -20, 30, 0, 170]);
	t.deepEqual(fixupHueShorter([-250, -8]), [110, -8]);
	t.end();
});

tape('fixupHueLonger', t => {
	t.deepEqual(fixupHueLonger([0, 340, 30, 0, 170]), [0, 340, 30, 360, 170]);

	t.deepEqual(
		fixupHueLonger([0, 179, 179, 360]),
		[0, -181, -181, 0],
		'equal consecutive values'
	);

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
