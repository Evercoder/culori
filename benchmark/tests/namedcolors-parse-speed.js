let chroma = require('chroma-js');
let { color } = require('d3-color');
let tinycolor = require("tinycolor2");
let culori = require('../../build/culori');
let benchmark = require('../util/benchmark');

let colors = Object.keys(culori.colorsNamed);
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
			culori(colors[i]);
		}
	}
});

