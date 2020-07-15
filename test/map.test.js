import tape from 'tape';
import {
	mapper,
	mapAlphaMultiply,
	mapAlphaDivide,
	formatHex8
} from '../src/index';

tape('mapping alpha', t => {
	let multiply = mapper(mapAlphaMultiply);
	let divide = mapper(mapAlphaDivide);

	t.equal(formatHex8(multiply('#ff00cc80')), '#80006680');
	t.equal(formatHex8(divide(multiply('#ff00cc80'))), '#ff00cc80');
	t.end();
});
