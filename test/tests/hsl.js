let tape = require('tape');

let culori = require('../../');

let from_hsl = culori.convert.from_hsl;
let to_hsl = culori.convert.to_hsl;
let round = culori.convert.round;

tape("from_hsl works correctly", function(test) {

	test.deepEqual(from_hsl(0, 0, 0), [0, 0, 0], 'lightness 0 should yield black');
	test.deepEqual(from_hsl(60, 0.25, 0), [0, 0, 0], '...regardless of hue and saturation');

	test.deepEqual(from_hsl(0, 0, 0.5), [0.5, 0.5, 0.5], 'saturation 0 should yield gray');
	test.deepEqual(from_hsl(60, 0, 0.25), [0.25, 0.25, 0.25], '...regardless of the hue');
	test.deepEqual(from_hsl(100, 0, 0.5), [0.5, 0.5, 0.5], '...or the lightness');

	test.end();

});

tape('to_hsl works correctly', function(test) {

	test.deepEqual(to_hsl(0, 0, 0), [undefined, 0, 0], 'black');

	test.deepEqual(to_hsl(0.25, 0.25, 0.25), [undefined, 0, 0.25], 'R = G = B yields undefined hue');
	test.deepEqual(to_hsl(0.6, 0.6, 0.6), [undefined, 0, 0.6], 'R = G = B yields zero saturation');
	
	test.deepEqual(to_hsl(1, 0, 0), [0, 1, 0.5], 'red');
	test.deepEqual(to_hsl(1, 1, 0), [60, 1, 0.5], 'yellow');
	test.deepEqual(to_hsl(0, 1, 0), [120, 1, 0.5], 'green');
	test.deepEqual(to_hsl(0, 1, 1), [180, 1, 0.5], 'cyan');
	test.deepEqual(to_hsl(0, 0, 1), [240, 1, 0.5], 'blue');
	test.deepEqual(to_hsl(1, 0, 1), [300, 1, 0.5], 'magenta');

	test.end();
});

tape('to_hsl -> from_hsl preserves color (via round)', function(test) {

	test.deepEqual(from_hsl.apply(null, to_hsl(1, 0, 0)).map(v => round(v)), [1, 0, 0], 'red');
	test.deepEqual(from_hsl.apply(null, to_hsl(1, 1, 0)).map(v => round(v)), [1, 1, 0], 'yellow');
	test.deepEqual(from_hsl.apply(null, to_hsl(0.3, 0.2, 0.1)).map(v => round(v)), [0.3, 0.2, 0.1], 'floating point');
	test.deepEqual(from_hsl.apply(null, to_hsl(0.7, 0.1, 0.3)).map(v => round(v)), [0.7, 0.1, 0.3], 'floating point');

	test.end();
});

tape('from_hsl -> to_hsl preserves color (via round)', function(test) {

	test.deepEqual(to_hsl.apply(null, from_hsl(0, 1, 0.5)).map(v => round(v)), [0, 1, 0.5], 'red');
	test.deepEqual(to_hsl.apply(null, from_hsl(60, 1, 0.5)).map(v => round(v)), [60, 1, 0.5], 'yellow');
	test.deepEqual(to_hsl.apply(null, from_hsl(0.3, 0.2, 0.1)).map(v => round(v)), [0.3, 0.2, 0.1], 'floating point');
	test.deepEqual(to_hsl.apply(null, from_hsl(0.7, 0.1, 0.3)).map(v => round(v)), [0.7, 0.1, 0.3], 'floating point');

	test.end();
});

tape('parses hsl / hsla CSS strings', function(test) {

	test.deepEqual(to_hsl.apply(null, culori.parse('hsl(0, 100%, 0%)')), [undefined, 0, 0], 'black');
	test.deepEqual(to_hsl.apply(null, culori.parse('hsl(100, 0%, 50%)')), [undefined, 0, 0.5], 'grey');
	test.deepEqual(to_hsl.apply(null, culori.parse('hsl(0, 100%, 50%)')), [0, 1, 0.5], 'red');

	test.end();
})