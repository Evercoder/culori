import chroma from 'chroma-js';
import { color } from 'd3-color';
import { quantize, interpolateRgb } from 'd3-interpolate';
import tinycolor from 'tinycolor2';
import { samples, interpolate, formatHex } from '../../src/index.js';
import benchmark from '../util/benchmark.js';

console.log(`
Benchmark: interpolate speed
============================
`);

let count = 1000;
let iterations = 1000;

benchmark('culori: #fff -> #000 in RGB', () => {
	for (var i = 0; i < iterations; i++) {
		samples(count)
			.map(interpolate(['#fff', '#000']))
			.map(formatHex);
	}
});

let interpolator = interpolate(['#fff', '#000']);
let hex = formatHex;

benchmark('culori: #fff -> #000 in RGB (cached)', () => {
	for (var i = 0; i < iterations; i++) {
		samples(count).map(interpolator).map(hex);
	}
});

benchmark('culori: #fff -> #000 in RGB (cached, single map)', () => {
	for (var i = 0; i < iterations; i++) {
		samples(count).map(c => hex(interpolator(c)));
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
		quantize(interpolateRgb('#fff', '#000'), count);
	}
});

let interp = interpolateRgb('#fff', '#000');
benchmark('d3-color: #fff -> #000 in RGB (cached)', () => {
	for (var i = 0; i < iterations; i++) {
		quantize(interp, count);
	}
});

let colors = ['red', 'white', 'green', 'blue', 'black', 'fuchsia', 'cyan'];

benchmark('culori: multiple colors in RGB', () => {
	for (var i = 0; i < iterations; i++) {
		samples(count).map(interpolate(colors)).map(hex);
	}
});

benchmark('culori: multiple colors in RGB (cached)', () => {
	let it = interpolate(colors);
	for (var i = 0; i < iterations; i++) {
		samples(count).map(it).map(hex);
	}
});

let scale2 = chroma.scale(colors);
benchmark('chroma: multiple colors in RGB (cached)', () => {
	for (var i = 0; i < iterations; i++) {
		scale2.colors(count);
	}
});
