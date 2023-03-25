import tape from 'tape';
import {
	clampChroma,
	displayable,
	inGamut,
	clampGamut,
	formatCss,
	differenceEuclidean,
	toGamut
} from '../src/index.js';

tape('RGB', function (test) {
	test.equal(displayable({ mode: 'rgb', r: 0, g: 0, b: 0 }), true);
	test.equal(
		displayable({ mode: 'rgb', r: 1, g: 1, b: 1, alpha: 0.5 }),
		true
	);
	test.equal(
		displayable({ mode: 'rgb', r: 1.1, g: 1, b: 1, alpha: 0.5 }),
		false
	);
	test.end();
});

tape('LCh', function (test) {
	test.equal(displayable('lch(50% 0 0)'), true);
	test.equal(displayable('lch(50% -100 0)'), true);
	test.equal(displayable('lch(120% -100 0)'), false);
	test.end();
});

tape('clampChroma (rgb)', function (test) {
	test.deepEqual(clampChroma('red'), { mode: 'rgb', r: 1, g: 0, b: 0 });
	test.deepEqual(clampChroma('rgb(300, 255, 255)'), {
		mode: 'rgb',
		r: 1,
		g: 1,
		b: 1
	});
	test.end();
});

tape('clampChroma (lch)', function (test) {
	test.deepEqual(clampChroma('lch(50% 120 5)'), {
		mode: 'lch',
		l: 50,
		c: 77.4609375,
		h: 5
	});
	test.equal(displayable(clampChroma('lch(50% 120 5)')), true);
	test.end();
});

tape('Issue #129', function (test) {
	let color = {
		mode: 'lch',
		l: 44.01740616147086,
		c: 58.743630227529145,
		h: 180.30393476177233
	};
	test.equal(displayable(clampChroma(color)), true);
	test.equal(
		displayable(clampChroma({ mode: 'oklch', l: 0.5, c: 0.161, h: 180 })),
		true
	);

	test.deepEqual(
		clampChroma({ mode: 'oklch', l: 0.5, c: 0.16, h: 180 }, 'oklch'),
		{ mode: 'oklch', l: 0.5, c: 0.090703125, h: 180 }
	);
	test.end();
});

tape('inGamut()', t => {
	t.equal(
		inGamut('rec2020')('color(rec2020 1 1 0)'),
		true,
		'rec2020 in rec2020 gamut'
	);
	t.equal(
		inGamut('p3')('color(rec2020 1 1 0)'),
		false,
		'rec2020 in p3 gamut'
	);
	t.equal(
		inGamut('rgb')('color(rec2020 1 1 0)'),
		false,
		'rec2020 in rgb gamut'
	);

	t.equal(
		inGamut('rec2020')('color(display-p3 1 1 0)'),
		true,
		'p3 in rec2020 gamut'
	);
	t.equal(inGamut('p3')('color(display-p3 1 1 0)'), true, 'p3 in p3 gamut');
	t.equal(
		inGamut('rgb')('color(display-p3 1 1 0)'),
		false,
		'p3 in rgb gamut'
	);

	t.equal(inGamut('hsl')('color(srgb 1 1 0)'), true, 'in hsl gamut');
	t.equal(inGamut('hsl')('color(srgb 1 1.1 0)'), false, 'out of hsl gamut');

	t.end();
});

tape('clampGamut()', t => {
	const p3Color = 'color(display-p3 1 1 0)';

	t.equal(
		formatCss(clampGamut('rgb')(p3Color)),
		'color(display-p3 0.9999999999999999 0.9999999999999997 0.3308973181805899)',
		'p3 color to rgb'
	);
	t.equal(
		formatCss(clampGamut('p3')(p3Color)),
		'color(display-p3 1 1 0)',
		'p3 color to p3'
	);
	t.equal(
		formatCss(clampGamut('rec2020')(p3Color)),
		'color(display-p3 1 1 0)',
		'p3 color to rec2020'
	);

	const crimson = 'color(display-p3 0.8 0.1 0.3)';
	const toRgb = clampGamut('rgb');

	t.equal(
		formatCss(toRgb(crimson)),
		'color(display-p3 0.8015640173988641 0.16985582666875737 0.30217671004779834)',
		'api docs example'
	);

	t.end();
});

tape('toGamut()', t => {
	t.equal(
		formatCss(toGamut('rgb')({ mode: 'oklch', l: 1.5, c: 0.2, h: 180 })),
		'color(srgb 1 1 1)',
		'white'
	);
	t.equal(
		formatCss(toGamut('rgb')({ mode: 'oklch', l: -1.5, c: 0.2, h: 180 })),
		'color(srgb 0 0 0)',
		'black'
	);
	t.equal(
		formatCss(toGamut('rgb')('color(--lch-d65 100 0 180)')),
		'color(srgb 0.9999999999999968 1.0000000000000016 0.9999999999999986)',
		'chroma = 0'
	);
	t.equal(
		formatCss(toGamut('p3')('lch(80% 150 60)')),
		'color(display-p3 0.9999999999999994 0.6969234154991887 0.5084794582132421)',
		'api docs example'
	);
	t.end();
});
