import chroma from 'chroma-js';
import { color } from 'd3-color';
import tinycolor from 'tinycolor2';
import { rgb, colorsNamed } from '../../src/index.js';
import benchmark from '../util/benchmark.js';

console.log(`
Benchmark: named colors parse speed
===================================
`);

let colors = Object.keys(colorsNamed);
let iterations = 10000;

benchmark('chroma: chroma("colorname")', () => {
	for (var it = 0; it < iterations; it++) {
		for (var i = 0; i < colors.length; i++) {
			chroma(colors[i]);
		}
	}
});

benchmark('d3-color: color("colorname")', () => {
	for (var it = 0; it < iterations; it++) {
		for (var i = 0; i < colors.length; i++) {
			color(colors[i]);
		}
	}
});

benchmark('tinycolor: tinycolor("colorname")', () => {
	for (var it = 0; it < iterations; it++) {
		for (var i = 0; i < colors.length; i++) {
			tinycolor(colors[i]);
		}
	}
});

benchmark('culori: culori("colorname")', () => {
	for (var it = 0; it < iterations; it++) {
		for (var i = 0; i < colors.length; i++) {
			rgb(colors[i]);
		}
	}
});
