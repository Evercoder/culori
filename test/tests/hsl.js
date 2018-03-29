let tape = require('tape');

let culori = require('../../');

let from_hsl = culori.from_hsl;
let to_hsl = culori.to_hsl;
let round = culori.round;

tape("from_hsl works correctly", function(test) {

	test.deepEqual(from_hsl({ h: 0, s: 0, l: 0 }), { r: 0, g: 0, b: 0 }, 'lightness 0 should yield black');
	test.deepEqual(from_hsl({ h: 60, s: 0.25, l: 0 }), { r: 0, g: 0, b: 0 }, '...regardless of hue and saturation');

	test.deepEqual(from_hsl({ h: 0, s: 0, l: 0.5 }), { r: 0.5, g: 0.5, b: 0.5 }, 'saturation 0 should yield gray');
	test.deepEqual(from_hsl({ h: 60, s: 0, l: 0.25 }), { r: 0.25, g: 0.25, b: 0.25 }, '...regardless of the hue');
	test.deepEqual(from_hsl({ h: 100, s: 0, l: 0.5 }), { r: 0.5, g: 0.5, b: 0.5 }, '...or the lightness');

	test.end();

});

tape('to_hsl works correctly', function(test) {

	test.deepEqual(to_hsl({ r: 0, g: 0, b: 0 }), { s: 0, l: 0 }, 'black');

	test.deepEqual(to_hsl({ r: 0.25, g: 0.25, b: 0.25 }), { s: 0, l: 0.25 }, 'R = G = B yields undefined hue');
	test.deepEqual(to_hsl({ r: 0.6, g: 0.6, b: 0.6 }), { s: 0, l: 0.6 }, 'R = G = B yields zero saturation');
	
	test.deepEqual(to_hsl({ r: 1, g: 0, b: 0 }), { h: 0, s: 1, l: 0.5 }, 'red');
	test.deepEqual(to_hsl({ r: 1, g: 1, b: 0 }), { h: 60, s: 1, l: 0.5 }, 'yellow');
	test.deepEqual(to_hsl({ r: 0, g: 1, b: 0 }), { h: 120, s: 1, l: 0.5 }, 'green');
	test.deepEqual(to_hsl({ r: 0, g: 1, b: 1 }), { h: 180, s: 1, l: 0.5 }, 'cyan');
	test.deepEqual(to_hsl({ r: 0, g: 0, b: 1 }), { h: 240, s: 1, l: 0.5 }, 'blue');
	test.deepEqual(to_hsl({ r: 1, g: 0, b: 1 }), { h: 300, s: 1, l: 0.5 }, 'magenta');

	test.end();
});

tape('to_hsl -> from_hsl preserves color (via round)', function(test) {

	test.deepEqual(
		from_hsl(to_hsl({ r: 1, g: 0, b: 0 })), 
		{ r: 1, g: 0, b: 0  }, 
		'red'
	);

	test.deepEqual(
		round(from_hsl(to_hsl({ r: 1, g: 1, b: 0 }))), 
		{ r: 1, g: 1, b: 0  }, 
		'yellow'
	);

	test.deepEqual(
		round(from_hsl(to_hsl({ r: 0.3, g: 0.2, b: 0.1 }))), 
		{ r: 0.3, g: 0.2, b: 0.1 }, 
		'floating point'
	);

	test.deepEqual(
		round(from_hsl(to_hsl({ r: 0.7, g: 0.1, b: 0.3 }))), 
		{ r: 0.7, g: 0.1, b: 0.3 }, 
		'floating point'
	);

	test.end();
});

tape('from_hsl -> to_hsl preserves color (via round)', function(test) {

	test.deepEqual(
		round(to_hsl(from_hsl({ h: 0, s: 1, l: 0.5 }))), 
		{ h: 0, s: 1, l: 0.5 }, 
		'red'
	);

	test.deepEqual(
		round(to_hsl(from_hsl({ h: 60, s: 1, l: 0.5 }))), 
		{ h: 60, s: 1, l: 0.5 }, 
		'yellow'
	);

	test.deepEqual(
		round(to_hsl(from_hsl({ h: 0.3, s: 0.2, l: 0.1 }))), 
		{ h: 0.3, s: 0.2, l: 0.1 }, 
		'floating point'
	);
	
	test.deepEqual(
		round(to_hsl(from_hsl({ h: 0.7, s: 0.1, l: 0.3 }))), 
		{ h: 0.7, s: 0.1, l: 0.3 }, 
		'floating point'
	);

	test.end();
});

tape('culori.hsl() parses hsl / hsla CSS strings', function(test) {

	test.deepEqual(culori.hsl('hsl(0, 100%, 0%)'), { s: 0, l: 0 }, 'black');
	test.deepEqual(culori.hsl('hsl(100, 0%, 50%)'), { s: 0, l: 0.5 }, 'grey');
	test.deepEqual(culori.hsl('hsl(0, 100%, 50%)'), { h: 0, s: 1, l: 0.5 }, 'red');

	test.end();
})