import chroma from 'chroma-js';
import { color } from 'd3-color';
import tinycolor from 'tinycolor2';
import { ColorSpace, sRGB, parse } from 'colorjs.io/fn';
import { rgb } from '../../src/index.js';
import benchmark from '../util/benchmark.js';

console.log(`
Benchmark: RGB parse speed
==========================
`);

let increment = 2;

benchmark('chroma: chroma("rgb(r,g,b)")', () => {
	for (var r = 0; r <= 255; r += increment) {
		for (var g = 0; g <= 255; g += increment) {
			for (var b = 0; b <= 255; b += increment) {
				chroma(`rgb(${r},${g},${b})`);
			}
		}
	}
});

benchmark('d3-color: color("rgb(r,g,b)")', () => {
	for (var r = 0; r <= 255; r += increment) {
		for (var g = 0; g <= 255; g += increment) {
			for (var b = 0; b <= 255; b += increment) {
				color(`rgb(${r},${g},${b})`);
			}
		}
	}
});

benchmark('tinycolor: tinycolor("rgb(r,g,b)")', () => {
	for (var r = 0; r <= 255; r += increment) {
		for (var g = 0; g <= 255; g += increment) {
			for (var b = 0; b <= 255; b += increment) {
				tinycolor(`rgb(${r},${g},${b})`);
			}
		}
	}
});

benchmark('culori: culori("rgb(r,g,b)")', () => {
	for (var r = 0; r <= 255; r += increment) {
		for (var g = 0; g <= 255; g += increment) {
			for (var b = 0; b <= 255; b += increment) {
				rgb(`rgb(${r},${g},${b})`);
			}
		}
	}
});

benchmark('culori: culori("rgb(r g b)")', () => {
	for (var r = 0; r <= 255; r += increment) {
		for (var g = 0; g <= 255; g += increment) {
			for (var b = 0; b <= 255; b += increment) {
				rgb(`rgb(${r} ${g} ${b})`);
			}
		}
	}
});

ColorSpace.register(sRGB);
benchmark('colorjs.io: parse("rgb(r g b)")', () => {
	for (var r = 0; r <= 255; r += increment) {
		for (var g = 0; g <= 255; g += increment) {
			for (var b = 0; b <= 255; b += increment) {
				parse(`rgb(${r} ${g} ${b})`);
			}
		}
	}
});
