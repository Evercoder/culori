let chroma = require('chroma-js');
let { color } = require('d3-color');
let tinycolor = require('tinycolor2');
let culori = require('../../build/culori.umd');
let benchmark = require('../util/benchmark');

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
				culori.rgb(`rgb(${r},${g},${b})`);
			}
		}
	}
});
