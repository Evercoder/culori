let tape = require('tape');

let culori = require('../../');

let { round, hsl, rgb } = culori;

let {
	IS_CULORI,
	IS_RGB,
	IS_HSL,
	IS_ALPHA_IMPLIED,
	IS_NORMALIZED,
	IS_HUE_UNDEFINED
} = culori;

let rgb_alpha_implied = IS_CULORI | IS_RGB | IS_ALPHA_IMPLIED | IS_NORMALIZED;
let hsl_alpha_implied = IS_CULORI | IS_HSL | IS_ALPHA_IMPLIED | IS_NORMALIZED;

tape('hsl(Object)', function(test) {

	test.end();
}); 

tape("rgb() converts from HSL to RGB", function(test) {

	test.deepEqual(
		rgb( hsl({ h: 0, s: 0, l: 0 }) ), 
		{ r: 0, g: 0, b: 0, flags: rgb_alpha_implied }, 
		'lightness 0 should yield black'
	);

	test.deepEqual(
		rgb( hsl({ h: 60, s: 0.25, l: 0 }) ), 
		{ r: 0, g: 0, b: 0, flags: rgb_alpha_implied }, 
		'...regardless of hue and saturation'
	);

	test.deepEqual(
		rgb( hsl({ h: 0, s: 0, l: 0.5 }) ), 
		{ r: 0.5, g: 0.5, b: 0.5, flags: rgb_alpha_implied }, 
		'saturation 0 should yield gray'
	);

	test.deepEqual(
		rgb( hsl({ h: 60, s: 0, l: 0.25 }) ), 
		{ r: 0.25, g: 0.25, b: 0.25, flags: rgb_alpha_implied }, 
		'...regardless of the hue'
	);

	test.deepEqual(
		rgb( hsl({ h: 100, s: 0, l: 0.5 }) ), 
		{ r: 0.5, g: 0.5, b: 0.5, flags: rgb_alpha_implied }, 
		'...or the lightness'
	);

	test.end();

});

tape('hsl() converts RGB to HSL', function(test) {

	test.deepEqual(
		hsl( rgb({ r: 0, g: 0, b: 0 }) ), 
		{ s: 0, l: 0, flags: hsl_alpha_implied | IS_HUE_UNDEFINED }, 
		'black'
	);

	test.deepEqual(
		hsl( rgb({ r: 0.25, g: 0.25, b: 0.25 }) ), 
		{ s: 0, l: 0.25, flags: hsl_alpha_implied | IS_HUE_UNDEFINED }, 
		'R = G = B yields undefined hue'
	);

	test.deepEqual(
		hsl( rgb({ r: 0.6, g: 0.6, b: 0.6 }) ), 
		{ s: 0, l: 0.6, flags: hsl_alpha_implied | IS_HUE_UNDEFINED }, 
		'R = G = B yields zero saturation'
	);
	
	test.deepEqual(
		hsl( rgb({ r: 1, g: 0, b: 0 }) ), 
		{ h: 0, s: 1, l: 0.5, flags: hsl_alpha_implied }, 
		'red'
	);

	test.deepEqual(
		hsl( rgb({ r: 1, g: 1, b: 0 }) ), 
		{ h: 60, s: 1, l: 0.5, flags: hsl_alpha_implied }, 
		'yellow'
	);

	test.deepEqual(
		hsl( rgb({ r: 0, g: 1, b: 0 }) ), 
		{ h: 120, s: 1, l: 0.5, flags: hsl_alpha_implied }, 
		'green'
	);

	test.deepEqual(
		hsl( rgb({ r: 0, g: 1, b: 1 }) ), 
		{ h: 180, s: 1, l: 0.5, flags: hsl_alpha_implied }, 
		'cyan'
	);

	test.deepEqual(
		hsl( rgb({ r: 0, g: 0, b: 1 }) ), 
		{ h: 240, s: 1, l: 0.5, flags: hsl_alpha_implied }, 
		'blue'
	);

	test.deepEqual(
		hsl( rgb({ r: 1, g: 0, b: 1 }) ), 
		{ h: 300, s: 1, l: 0.5, flags: hsl_alpha_implied }, 
		'magenta'
	);

	test.end();
});

tape('rgb -> hsl -> rgb preserves color (via round)', function(test) {

	test.deepEqual(
		round(rgb(hsl(rgb({ r: 1, g: 0, b: 0 })))), 
		{ r: 1, g: 0, b: 0, flags: rgb_alpha_implied }, 
		'red'
	);

	test.deepEqual(
		round(rgb(hsl(rgb({ r: 1, g: 1, b: 0 })))), 
		{ r: 1, g: 1, b: 0, flags: rgb_alpha_implied }, 
		'yellow'
	);

	test.deepEqual(
		round(rgb(hsl(rgb({ r: 0.3, g: 0.2, b: 0.1 })))),
		{ r: 0.3, g: 0.2, b: 0.1, flags: rgb_alpha_implied }, 
		'floating point'
	);

	test.deepEqual(
		round(rgb(hsl(rgb({ r: 0.7, g: 0.1, b: 0.3 })))),
		{ r: 0.7, g: 0.1, b: 0.3, flags: rgb_alpha_implied }, 
		'floating point'
	);

	test.end();
});

tape('hsl -> rgb -> hsl preserves color (via round)', function(test) {

	test.deepEqual(
		round(hsl(rgb(hsl({ h: 0, s: 1, l: 0.5 })))), 
		{ h: 0, s: 1, l: 0.5, flags: hsl_alpha_implied }, 
		'red'
	);

	test.deepEqual(
		round(hsl(rgb(hsl({ h: 60, s: 1, l: 0.5 })))), 
		{ h: 60, s: 1, l: 0.5, flags: hsl_alpha_implied }, 
		'yellow'
	);

	test.deepEqual(
		round(hsl(rgb(hsl({ h: 0.3, s: 0.2, l: 0.1 })))), 
		{ h: 0.3, s: 0.2, l: 0.1, flags: hsl_alpha_implied }, 
		'floating point'
	);
	
	test.deepEqual(
		round(hsl(rgb(hsl({ h: 0.7, s: 0.1, l: 0.3 })))), 
		{ h: 0.7, s: 0.1, l: 0.3, flags: hsl_alpha_implied }, 
		'floating point'
	);

	test.end();
});

tape('hsl() parses hsl / hsla CSS strings', function(test) {

	test.deepEqual(hsl('hsl(0, 100%, 0%)'), { s: 0, l: 0, flags: hsl_alpha_implied | IS_HUE_UNDEFINED }, 'black');
	test.deepEqual(hsl('hsl(100, 0%, 50%)'), { s: 0, l: 0.5, flags: hsl_alpha_implied | IS_HUE_UNDEFINED }, 'grey');
	test.deepEqual(hsl('hsl(0, 100%, 50%)'), { h: 0, s: 1, l: 0.5, flags: hsl_alpha_implied }, 'red');

	test.end();
})