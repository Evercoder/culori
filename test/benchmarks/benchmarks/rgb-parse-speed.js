let chroma = require('chroma-js');
let { color } = require('d3-color');
let tinycolor = require("tinycolor2");
let culori = require('../../../build/culori');

let increment = 1;

var start, end;
function startBench() {
	start = process.hrtime();
}

function endBench() {
	end = process.hrtime(start);
	return end[0] + 's ' + end[1] / 1000000 + 'ms';
}

startBench();
for (var r = 0; r <= 255; r+=increment) {
	for (var g = 0; g <= 255; g+=increment) {
		for (var b = 0; b <= 255; b+=increment) {
			chroma(`rgb(${r},${g},${b})`);
		}
	}
}
console.log('chroma: chroma("rgb(r,g,b)")', endBench());

startBench();
for (var r = 0; r <= 255; r+=increment) {
	for (var g = 0; g <= 255; g+=increment) {
		for (var b = 0; b <= 255; b+=increment) {
			color(`rgb(${r},${g},${b})`);
		}
	}
}
console.log('d3-color: color("rgb(r,g,b)")', endBench());

startBench();
for (var r = 0; r <= 255; r+=increment) {
	for (var g = 0; g <= 255; g+=increment) {
		for (var b = 0; b <= 255; b+=increment) {
			tinycolor(`rgb(${r},${g},${b})`);
		}
	}
}
console.log('tinycolor: tinycolor("rgb(r,g,b)")', endBench());

startBench();
for (var r = 0; r <= 255; r+=increment) {
	for (var g = 0; g <= 255; g+=increment) {
		for (var b = 0; b <= 255; b+=increment) {
			culori(`rgb(${r},${g},${b})`);
		}
	}
}

console.log('culori: culori("rgb(r,g,b)")', endBench());

