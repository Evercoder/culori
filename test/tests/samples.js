let tape = require('tape');
let culori = require('../../');
let { interpolate, samples, css } = culori;

tape('11 swatches between black and white in RGB', function(test) {

	test.deepEqual(
		samples(11).map(interpolate(['#fff', '#000'])).map(css('hex')),
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

tape('11 swatches between black and white in Lab', function(test) {

	test.deepEqual(
		samples(11).map(interpolate(['#fff', '#000'], 'lab')).map(css('hex')),
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

tape('11 swatches between black and white in Lch', function(test) {

	test.deepEqual(
		samples(11).map(interpolate(['#fff', '#000'], 'lch')).map(css('hex')),
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