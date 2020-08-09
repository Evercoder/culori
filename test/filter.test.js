import tape from 'tape';
import {
	filterBrightness,
	filterContrast,
	filterSepia,
	formatHex,
	filterSaturate,
	filterGrayscale,
	filterInvert,
	filterHueRotate
} from '../src/index';

tape('filterBrightness', t => {
	t.end();
});

tape('filterContrast', t => {
	t.end();
});

tape('filterSepia', t => {
	t.equal(formatHex(filterSepia(0)('red')), '#ff0000', 'unchanged');
	t.equal(formatHex(filterSepia(1)('red')), '#645945', 'fully sepia');
	t.end();
});

tape('filterSaturate', t => {
	t.equal(
		formatHex(filterSaturate(0)('#cc0033')),
		'#2f2f2f',
		'fully desaturated'
	);
	t.equal(formatHex(filterSaturate(1)('#cc0033')), '#cc0033', 'unchanged');
	t.equal(
		formatHex(filterSaturate(2)('#cc0033')),
		'#ff0037',
		'oversaturated'
	);
	t.end();
});

tape('filterGrayscale', t => {
	t.equal(formatHex(filterGrayscale(0)('red')), '#ff0000', 'unchanged');
	t.equal(formatHex(filterGrayscale(1)('red')), '#363636', 'fully grayscale');
	t.end();
});

tape('filterInvert', t => {
	t.equal(formatHex(filterInvert(0)('red')), '#ff0000', 'unchanged');
	t.equal(formatHex(filterInvert(0.5)('red')), '#808080', 'gray');
	t.equal(formatHex(filterInvert(1)('red')), '#00ffff', 'fully inverted');
	t.end();
});

tape('filterHueRotate', t => {
	t.equal(formatHex(filterHueRotate(60)('red')), '#6c3b00');
	t.end();
});
