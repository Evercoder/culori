let tape = require('tape');
let culori = require('../../');
let { parse } = culori;

tape('named colors', function(test) {
	test.deepEqual(
		parse('tomato'),
		{ mode: 'rgb', r: 1, g: 0.38823529411764707, b: 0.2784313725490196 },
		'tomato'
	);

	test.deepEqual(
		parse('RoyalBlue'),
		{ mode: 'rgb', r: 0.2549019607843137, g: 0.4117647058823529, b: 0.8823529411764706 },
		'RoyalBlue (CamelCase)'
	);

	test.end();
});

tape('hex colors', function(test) {
	test.deepEqual(
		parse('#369'),
		{ mode: 'rgb', r: 0.2, g: 0.4, b: 0.6 },
		'#369'
	);

	test.deepEqual(
		parse('369'),
		{ mode: 'rgb', r: 0.2, g: 0.4, b: 0.6 },
		'369'
	);

	test.deepEqual(
		parse('#3690'),
		 { mode: 'rgb', r: 0.2, g: 0.4, b: 0.6, a: 0 },
		'#3690'
	);

	test.deepEqual(
		parse('3690'),
		 { mode: 'rgb', r: 0.2, g: 0.4, b: 0.6, a: 0 },
		'3690'
	);

	test.deepEqual(
		parse('#163264'),
		 { mode: 'rgb', r: 0.08627450980392157, g: 0.19607843137254902, b: 0.39215686274509803 },
		'#163264'
	);

	test.deepEqual(
		parse('163264'),
		 { mode: 'rgb', r: 0.08627450980392157, g: 0.19607843137254902, b: 0.39215686274509803 },
		'163264'
	);

	test.deepEqual(
		parse('#163264ff'),
		 { mode: 'rgb', r: 0.08627450980392157, g: 0.19607843137254902, b: 0.39215686274509803, a: 1 },
		'#163264ff'
	);

	test.deepEqual(
		parse('163264FF'),
		 { mode: 'rgb', r: 0.08627450980392157, g: 0.19607843137254902, b: 0.39215686274509803, a: 1 },
		'163264FF'
	);

	test.end();
});

tape('rgb', function(test) {

	test.deepEqual(
		parse('rgb(255, 0, 0)'),
		{ r: 1, g: 0, b: 0, mode: 'rgb' },
		'rgb legacy'
	);

	test.deepEqual(
		parse('rgb(100%, 0, 0)'),
		{ r: 1, g: 0, b: 0, mode: 'rgb' },
		'rgb legacy (percentage)'
	);

	test.deepEqual(
		parse('rgba(255, 0, 0, 0.5)'),
		{ r: 1, g: 0, b: 0, mode: 'rgb', a: 0.5 },
		'rgba legacy'
	);

	test.deepEqual(
		parse('rgba(100%, 0, 0, 50%)'),
		{ r: 1, g: 0, b: 0, mode: 'rgb', a: 0.5 },
		'rgba legacy (percentage)'
	);

	test.deepEqual(
		parse('rgb(255  0  0)'),
		{ r: 1, g: 0, b: 0, mode: 'rgb' },
		'rgb current'
	);

	test.deepEqual(
		parse('rgb(100%  0  0)'),
		{ r: 1, g: 0, b: 0, mode: 'rgb' },
		'rgb current (percentage)'
	);

	test.deepEqual(
		parse('rgb(255 0  0 / 0.5)'),
		{ r: 1, g: 0, b: 0, mode: 'rgb', a: 0.5 },
		'rgba current'
	);

	test.deepEqual(
		parse('rgb(100% 0 0 / 50%)'),
		{ r: 1, g: 0, b: 0, mode: 'rgb', a: 0.5 },
		'rgba current (percentage)'
	);

	test.end();
});

tape('hsl', function(test) {

	test.deepEqual(
		parse('hsl(0, 1, 0.5)'),
		undefined,
		'hsl legacy (no percentage)'
	);

	test.deepEqual(
		parse('hsl(120, 100%, 50%)'),
		{ h: 120, s: 1, l: 0.5, mode: 'hsl' },
		'hsl legacy (percentage)'
	);

	test.deepEqual(
		parse('hsl(120deg, 100%, 50%)'),
		{ h: 120, s: 1, l: 0.5, mode: 'hsl' },
		'hsl legacy (deg)'
	);

	test.deepEqual(
		parse('hsl(0.5turn, 100%, 50%)'),
		{ h: 180, s: 1, l: 0.5, mode: 'hsl' },
		'hsl legacy (turn)'
	);

	test.deepEqual(
		parse(`hsl(${Math.PI}rad, 100%, 50%)`),
		{ h: 180, s: 1, l: 0.5, mode: 'hsl' },
		'hsl legacy (rad)'
	);

	test.deepEqual(
		parse('hsl(40grad, 100%, 50%)'),
		{ h: 36, s: 1, l: 0.5, mode: 'hsl' },
		'hsl legacy (grad)'
	);

	test.deepEqual(
		parse('hsla(0, 1, 0.5, 0.5)'),
		undefined,
		'hsla legacy (no percentage)'
	);

	test.deepEqual(
		parse('hsla(240, 100%, 50%, 50%)'),
		{ h: 240, s: 1, l: 0.5, mode: 'hsl', a: 0.5 },
		'hsla legacy (percentage)'
	);

	test.deepEqual(
		parse('hsl(0 1 0.5)'),
		undefined,
		'hsl current (no percentage)'
	);

	test.deepEqual(
		parse('hsl(180 100% 50%)'),
		{ h: 180, s: 1, l: 0.5, mode: 'hsl' },
		'hsl current (percentage)'
	);

	test.deepEqual(
		parse('hsl(0 1 0.5 / 0.5)'),
		undefined,
		'hsla current (no percentage)'
	);

	test.deepEqual(
		parse('hsl(0 100% 50% / 50%)'),
		{  h: 0, s: 1, l: 0.5,  mode: 'hsl', a: 0.5 },
		'hsla current (percentage)'
	);

	test.end();
});

tape('hwb', function(test) {
	test.deepEqual(
		parse('hwb(100 0% 0%)'), 
		{ h: 100, w: 0, b: 0, mode: 'hwb' }, 
		'black'
	);

	test.deepEqual(
		parse('hwb(200 150% 150%)'), 
		{ h: 200, w: 0.5, b: 0.5, mode: 'hwb' }, 
		'grey'
	);

	test.deepEqual(
		parse('hwb(200 10% 30% / 50%)'), 
		{ h: 200, w: 0.1, b: 0.3, a: 0.5, mode: 'hwb' }, 
		'hwba'
	);

	test.end();
});

tape('transparent', function(test) {

	test.deepEqual(
		parse('transparent'),
		{ r: 0, g: 0, b: 0, a: 0, mode: 'rgb' }
	)

	test.end();
});