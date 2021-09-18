import tape from 'tape';
import {
	formatHex,
	formatHex8,
	formatRgb,
	formatHsl,
	rgb
} from '../src/index.js';

tape('formatHex', function (test) {
	test.equal(formatHex('tomato'), '#ff6347');
	test.end();
});

tape('formatHex8', t => {
	t.equal(
		formatHex8({ mode: 'rgb', r: 1, g: 1, b: 1, alpha: 0 }),
		'#ffffff00'
	);
	t.end();
});

tape('formatRgb', function (test) {
	test.equal(formatRgb(rgb('#f0f0f0f0')), 'rgba(240, 240, 240, 0.94)');
	test.equal(formatRgb('#f0f0f0f0'), 'rgba(240, 240, 240, 0.94)');

	test.end();
});

tape('formatHsl', function (test) {
	test.equal(formatHsl('red'), 'hsl(0, 100%, 50%)');
	test.equal(
		formatHsl({
			mode: 'hsl',
			h: 30.21,
			s: 0.2361,
			l: 0.48321,
			alpha: -0.2
		}),
		'hsla(30.21, 23.61%, 48.32%, 0)'
	);
	test.equal(
		formatHsl({ mode: 'hsl', h: 405, s: 1.2, l: -1 }),
		'hsl(405, 100%, 0%)'
	);
	test.end();
});
