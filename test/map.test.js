import tape from 'tape';
import {
	mapper,
	mapAlphaMultiply,
	mapAlphaDivide,
	mapTransferLinear,
	formatHex,
	formatHex8
} from '../src/index';

tape('mapping alpha', t => {
	let multiply = mapper(mapAlphaMultiply);
	let divide = mapper(mapAlphaDivide);

	t.equal(formatHex8(multiply('#ff00cc80')), '#80006680');
	t.equal(formatHex8(divide(multiply('#ff00cc80'))), '#ff00cc80');
	t.end();
});

tape('transfer functions', t => {
	let brighten = mapper(mapTransferLinear(2));
	t.equal(formatHex(brighten('#cc0033')), '#ff0066');
	t.end();
});
