let tape = require('tape');
let culori = require('../');
let { map, round, hsv, rgb } = culori;

let approx = map((k,v) => round()(v));

tape("rgb() converts from HSV to RGB", function(test) {

	test.deepEqual(
		rgb( hsv({ h: 0, s: 0, v: 0 }) ), 
		{ r: 0, g: 0, b: 0, mode: 'rgb' }, 
		'lightness 0 should yield black'
	);

	test.deepEqual(
		rgb( hsv({ h: 60, s: 0.25, v: 0 }) ), 
		{ r: 0, g: 0, b: 0, mode: 'rgb' }, 
		'...regardless of hue and saturation'
	);

	test.deepEqual(
		rgb( hsv({ h: 0, s: 0, v: 0.5 }) ), 
		{ r: 0.5, g: 0.5, b: 0.5, mode: 'rgb' }, 
		'saturation 0 should yield gray'
	);

	test.deepEqual(
		rgb( hsv({ h: 60, s: 0, v: 0.25 }) ), 
		{ r: 0.25, g: 0.25, b: 0.25, mode: 'rgb' }, 
		'...regardless of the hue'
	);

	test.deepEqual(
		rgb( hsv({ h: 100, s: 0, v: 0.5 }) ), 
		{ r: 0.5, g: 0.5, b: 0.5, mode: 'rgb' }, 
		'...or the lightness'
	);

	test.end();

});

tape('hsv() converts RGB to HSV', function(test) {

	test.deepEqual(
		hsv( rgb({ r: 0, g: 0, b: 0 }) ), 
		{ s: 0, v: 0, mode: 'hsv' }, 
		'black'
	);

	test.deepEqual(
		hsv( rgb({ r: 0.25, g: 0.25, b: 0.25 }) ), 
		{ s: 0, v: 0.25, mode: 'hsv' }, 
		'R = G = B yields undefined hue'
	);

	test.deepEqual(
		hsv( rgb({ r: 0.6, g: 0.6, b: 0.6 }) ), 
		{ s: 0, v: 0.6, mode: 'hsv' }, 
		'R = G = B yields zero saturation'
	);
	
	test.deepEqual(
		hsv( rgb({ r: 1, g: 0, b: 0 }) ), 
		{ h: 0, s: 1, v: 1, mode: 'hsv' }, 
		'red'
	);

	test.deepEqual(
		hsv( rgb({ r: 1, g: 1, b: 0 }) ), 
		{ h: 60, s: 1, v: 1, mode: 'hsv' }, 
		'yellow'
	);

	test.deepEqual(
		hsv( rgb({ r: 0, g: 1, b: 0 }) ), 
		{ h: 120, s: 1, v: 1, mode: 'hsv' }, 
		'green'
	);

	test.deepEqual(
		hsv( rgb({ r: 0, g: 1, b: 1 }) ), 
		{ h: 180, s: 1, v: 1, mode: 'hsv' }, 
		'cyan'
	);

	test.deepEqual(
		hsv( rgb({ r: 0, g: 0, b: 1 }) ), 
		{ h: 240, s: 1, v: 1, mode: 'hsv' }, 
		'blue'
	);

	test.deepEqual(
		hsv( rgb({ r: 1, g: 0, b: 1 }) ), 
		{ h: 300, s: 1, v: 1, mode: 'hsv' }, 
		'magenta'
	);

	test.end();
});

tape('rgb -> hsv -> rgb preserves color (via round)', function(test) {

	test.deepEqual(
		approx(rgb(hsv(rgb({ r: 1, g: 0, b: 0 })))), 
		{ r: 1, g: 0, b: 0, mode: 'rgb' }, 
		'red'
	);

	test.deepEqual(
		approx(rgb(hsv(rgb({ r: 1, g: 1, b: 0 })))), 
		{ r: 1, g: 1, b: 0, mode: 'rgb' }, 
		'yellow'
	);

	test.deepEqual(
		approx(rgb(hsv(rgb({ r: 0.3, g: 0.2, b: 0.1 })))),
		{ r: 0.3, g: 0.2, b: 0.1, mode: 'rgb' }, 
		'floating point'
	);

	test.deepEqual(
		approx(rgb(hsv(rgb({ r: 0.7, g: 0.1, b: 0.3 })))),
		{ r: 0.7, g: 0.1, b: 0.3, mode: 'rgb' }, 
		'floating point'
	);

	test.end();
});

tape('hsv -> rgb -> hsv preserves color (via round)', function(test) {

	test.deepEqual(
		approx(hsv(rgb(hsv({ h: 0, s: 1, v: 0.5 })))), 
		{ h: 0, s: 1, v: 0.5, mode: 'hsv' }, 
		'red'
	);

	test.deepEqual(
		approx(hsv(rgb(hsv({ h: 60, s: 1, v: 0.5 })))), 
		{ h: 60, s: 1, v: 0.5, mode: 'hsv' }, 
		'yellow'
	);

	test.deepEqual(
		approx(hsv(rgb(hsv({ h: 0.3, s: 0.2, v: 0.1 })))), 
		{ h: 0.3, s: 0.2, v: 0.1, mode: 'hsv' }, 
		'floating point'
	);
	
	test.deepEqual(
		approx(hsv(rgb(hsv({ h: 0.7, s: 0.1, v: 0.3 })))), 
		{ h: 0.7, s: 0.1, v: 0.3, mode: 'hsv' }, 
		'floating point'
	);

	test.end();
});

tape('hsv(str)', function(test) {
	test.deepEqual(hsv('white'),  { mode: 'hsv', s: 0, v: 1 });
	test.end();
})