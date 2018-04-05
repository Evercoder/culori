let chroma = require('chroma-js');
let { color } = require('d3-color');
let tinycolor = require("tinycolor2");
let culori = require('../../../build/culori');

var start, end;
function startBench() {
	start = process.hrtime();
}

function endBench() {
	end = process.hrtime(start);
	return end[0] + 's ' + end[1] / 1000000 + 'ms';
}

let colors = Object.keys(culori.named);
let iterations = 10000;

startBench();
for (var it = 0; it < iterations; it++) {
	for (var i = 0; i < colors.length; i++) {
		chroma(colors[i]);
	}
}
console.log('chroma: chroma("colorname")', endBench());

startBench();
for (var it = 0; it < iterations; it++) {
	for (var i = 0; i < colors.length; i++) {
		color(colors[i]);
	}
}
console.log('d3-color: color("colorname")', endBench());

startBench();
for (var it = 0; it < iterations; it++) {
	for (var i = 0; i < colors.length; i++) {
		tinycolor(colors[i]);
	}
}
console.log('tinycolor: tinycolor("colorname")', endBench());

startBench();
for (var it = 0; it < iterations; it++) {
	for (var i = 0; i < colors.length; i++) {
		culori(colors[i]);
	}
}
console.log('culori: culori("colorname")', endBench());

