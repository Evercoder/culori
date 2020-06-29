let chroma = require('chroma-js');
let { color } = require('d3-color');
let d3i = require('d3-interpolate');
let tinycolor = require('tinycolor2');
let culori = require('../../build/culori.umd');
let benchmark = require('../util/benchmark');

console.log(`
Benchmark: interpolate speed
============================
`);

let count = 1000;
let iterations = 1000;

benchmark('culori: #fff -> #000 in RGB', () => {
	for (var i = 0; i < iterations; i++) {
		culori
			.samples(count)
			.map(culori.interpolate(['#fff', '#000']))
			.map(culori.formatHex);
	}
});

let interpolator = culori.interpolate(['#fff', '#000']);
let hex = culori.formatHex;

benchmark('culori: #fff -> #000 in RGB (cached)', () => {
	for (var i = 0; i < iterations; i++) {
		culori.samples(count).map(interpolator).map(hex);
	}
});

benchmark('culori: #fff -> #000 in RGB (cached, single map)', () => {
	for (var i = 0; i < iterations; i++) {
		culori.samples(count).map(c => hex(interpolator(c)));
	}
});

benchmark('chroma: #fff -> #000 in RGB', () => {
	for (var i = 0; i < iterations; i++) {
		chroma.scale(['#fff', '#000']).colors(count);
	}
});

let scale = chroma.scale(['#fff', '#000']);
benchmark('chroma: #fff -> #000 in RGB (cached)', () => {
	for (var i = 0; i < iterations; i++) {
		scale.colors(count);
	}
});

benchmark('d3-color: #fff -> #000 in RGB', () => {
	for (var i = 0; i < iterations; i++) {
		d3i.quantize(d3i.interpolateRgb('#fff', '#000'), count);
	}
});

let interp = d3i.interpolateRgb('#fff', '#000');
benchmark('d3-color: #fff -> #000 in RGB (cached)', () => {
	for (var i = 0; i < iterations; i++) {
		d3i.quantize(interp, count);
	}
});

let colors = ['red', 'white', 'green', 'blue', 'black', 'fuchsia', 'cyan'];

benchmark('culori: multiple colors in RGB', () => {
	for (var i = 0; i < iterations; i++) {
		culori.samples(count).map(culori.interpolate(colors)).map(hex);
	}
});

benchmark('culori: multiple colors in RGB (cached)', () => {
	let lerp = culori.interpolate(colors);
	for (var i = 0; i < iterations; i++) {
		culori.samples(count).map(lerp).map(hex);
	}
});

let scale2 = chroma.scale(colors);
benchmark('chroma: multiple colors in RGB (cached)', () => {
	for (var i = 0; i < iterations; i++) {
		scale2.colors(count);
	}
});
