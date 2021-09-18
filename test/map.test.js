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
