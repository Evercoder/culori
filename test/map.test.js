import tape from 'tape';
import {
	mapper,
	mapAlphaMultiply,
	mapAlphaDivide,
	mapTransferLinear,
	mapTransferGamma,
	formatHex,
	formatHex8
} from '../src/index.js';

tape('mapping alpha', t => {
	let multiply = mapper(mapAlphaMultiply);
	let divide = mapper(mapAlphaDivide);

	t.equal(formatHex8(multiply('#ff00cc80')), '#80006680');
	t.equal(formatHex8(divide(multiply('#ff00cc80'))), '#ff00cc80');
	t.end();
});

tape('linear transfer function', t => {
	let brighten = mapper(mapTransferLinear(2));
	t.equal(formatHex(brighten('#cc0033')), '#ff0066');
	t.end();
});

tape('gamma transfer function', t => {
	let brighten = mapper(mapTransferGamma(2.2));
	t.equal(formatHex(brighten('#cc0033')), '#ff0070');
	t.end();
});

tape(
	"The mode parameter can be set to null, in which case the mapper will iterate through all the channels in the color's original color space.",
	// https://culorijs.org/api/#mapper
	t => {
		let brighten = mapper(mapTransferGamma(2.2), null);
		t.deepEqual(
			brighten(
				'color(--okhsv 29.2338851923426 0.9995219692256307 0.9999999999999997)'
			),
			{
				mode: 'okhsv',
				h: 64.31454742315373,
				s: 2.198948332296388,
				v: 2.1999999999999993
			}
		);
		t.end();
	}
);
