import tape from 'tape';
import { interpolate, samples, formatHex } from '../src/index.js';

tape('11 swatches between black and white in RGB', function (test) {
	test.deepEqual(
		samples(11)
			.map(interpolate(['#fff', '#000']))
			.map(formatHex),
		[
			'#ffffff',
			'#e6e6e6',
			'#cccccc',
			'#b3b3b3',
			'#999999',
			'#808080',
			'#666666',
			'#4d4d4d',
			'#333333',
			'#191919',
			'#000000'
		]
	);

	test.end();
});

tape('11 swatches between black and white in Lab', function (test) {
	test.deepEqual(
		samples(11)
			.map(interpolate(['#fff', '#000'], 'lab'))
			.map(formatHex),
		[
			'#ffffff',
			'#e2e2e2',
			'#c6c6c6',
			'#ababab',
			'#919191',
			'#777777',
			'#5e5e5e',
			'#474747',
			'#303030',
			'#1b1b1b',
			'#000000'
		]
	);

	test.end();
});

tape('11 swatches between black and white in Lch', function (test) {
	test.deepEqual(
		samples(11)
			.map(interpolate(['#fff', '#000'], 'lch'))
			.map(formatHex),
		[
			'#ffffff',
			'#e2e2e2',
			'#c6c6c6',
			'#ababab',
			'#919191',
			'#777777',
			'#5e5e5e',
			'#474747',
			'#303030',
			'#1b1b1b',
			'#000000'
		]
	);

	test.end();
});

tape('11 swatches between black and white in DIN99o', function (test) {
	test.deepEqual(
		samples(11)
			.map(interpolate(['#fff', '#000'], 'dlab'))
			.map(formatHex),
		[
			'#ffffff',
			'#dedede',
			'#bfbfbf',
			'#a2a2a2',
			'#868686',
			'#6d6d6d',
			'#555555',
			'#3f3f3f',
			'#2b2b2b',
			'#191919',
			'#000000'
		]
	);

	// test.deepEqual(
	// 	samples(11).map(interpolate(['red', 'white'], 'dlch')).map(formatHex),
	// 	[]
	// )

	test.end();
});

// tape('default cubehelix scale', function(test) {

// 	let start = cubehelix({
// 		h: 300,
// 		s: 0.5,
// 		l: 0
// 	});

// 	let end = cubehelix({
// 		h: -240,
// 		s: 0.5,
// 		l: 1
// 	})

// 	test.deepEqual(
// 		samples(10).map(interpolate([start, end], 'cubehelix')).map(formatHex),
// 		['#000000', '#1a1935', '#15474e', '#2b6f39', '#767b33', '#c17a6f', '#d490c6', '#c3c0f2', '#ceebef', '#ffffff']
// 	)

// 	test.end();
// });
