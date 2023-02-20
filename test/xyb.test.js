import tape from 'tape';
import { xyb, formatRgb, formatCss } from '../src/index.js';

tape('rgb -> xyb', t => {
	t.deepEqual(xyb('purple'), {
		mode: 'xyb',
		x: 0.013838974535428816,
		y: 0.27055837298918495,
		b: 0.40387181943446704
	});
	t.end();
});

tape('rgb -> xyb -> rgb', t => {
	t.deepEqual(
		formatRgb(xyb('rgb(255, 255, 255)')),
		'rgb(255, 255, 255)',
		'white'
	);

	t.deepEqual(formatRgb(xyb('rgb(0, 0, 0)')), 'rgb(0, 0, 0)', 'black');
	t.deepEqual(formatRgb(xyb('rgb(100, 0, 0)')), 'rgb(100, 0, 0)', 'red');
	t.deepEqual(formatRgb(xyb('rgb(0, 120, 0)')), 'rgb(0, 120, 0)', 'blue');
	t.deepEqual(formatRgb(xyb('rgb(0, 0, 89)')), 'rgb(0, 0, 89)', 'green');

	t.end();
});

tape('color(--xyb)', t => {
	t.deepEqual(xyb('color(--xyb 1 0 0 / 0.25)'), {
		x: 1,
		y: 0,
		b: 0,
		alpha: 0.25,
		mode: 'xyb'
	});
	t.deepEqual(xyb('color(--xyb 0% 50% 0.5 / 25%)'), {
		x: 0,
		y: 0.5,
		b: 0.5,
		alpha: 0.25,
		mode: 'xyb'
	});
	t.end();
});

tape('formatCss', t => {
	t.equal(
		formatCss('color(--xyb 0% 50% 0.5 / 25%)'),
		'color(--xyb 0 0.5 0.5 / 0.25)'
	);
	t.end();
});
