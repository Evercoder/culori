import tape from 'tape';
import { interpolate, formatHex8, premultiplyAlpha } from '../src/index';

tape('interpolate w/ & w/o alpha premultiplication', t => {
	let it = interpolate(['red', 'transparent', 'blue']);

	t.deepEqual(formatHex8(it(0.25)), '#80000080', 'w/o alpha');
	t.deepEqual(formatHex8(it(0.75)), '#00008080', 'w/o alpha');

	let it2 = interpolate(
		['red', 'transparent', 'blue'],
		'rgb',
		null,
		premultiplyAlpha
	);

	t.deepEqual(formatHex8(it2(0.25)), '#ff000080', 'w/ alpha');
	t.deepEqual(formatHex8(it2(0.75)), '#0000ff80', 'w/ alpha');
	t.end();
});
