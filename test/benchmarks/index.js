let chroma = require('chroma-js');
let culori = require('../../build/culori');
let { color, rgb } = require('d3-color');
let tinycolor = require("tinycolor2");

let increment = 3;

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
console.log('chroma (rgb)', endBench());

startBench();
for (var r = 0; r <= 255; r+=increment) {
	for (var g = 0; g <= 255; g+=increment) {
		for (var b = 0; b <= 255; b+=increment) {
			color(`rgb(${r},${g},${b})`);
		}
	}
}
console.log('d3-color (rgb)', endBench());

startBench();
for (var r = 0; r <= 255; r+=increment) {
	for (var g = 0; g <= 255; g+=increment) {
		for (var b = 0; b <= 255; b+=increment) {
			tinycolor(`rgb(${r},${g},${b})`);
		}
	}
}
console.log('tinycolor (rgb)', endBench());

startBench();
for (var r = 0; r <= 255; r+=increment) {
	for (var g = 0; g <= 255; g+=increment) {
		for (var b = 0; b <= 255; b+=increment) {
			culori.parse.rgb(`rgb(${r},${g},${b})`);
		}
	}
}
console.log('culori (rgb)', endBench());

startBench();
for (var r = 0; r <= 255; r+=increment) {
	for (var g = 0; g <= 255; g+=increment) {
		for (var b = 0; b <= 255; b+=increment) {
			rgb(`rgba(${r},${g},${b}, 0)`);
		}
	}
}
console.log('d3-color (rgba)', endBench());

start = process.hrtime();
let rgbparse = culori.parser.rgb;
for (var r = 0; r <= 255; r+=increment) {
	for (var g = 0; g <= 255; g+=increment) {
		for (var b = 0; b <= 255; b+=increment) {
			rgbparse(`rgba(${r},${g},${b}, 0)`);
		}
	}
}
console.log('culori.parser.rgba', endBench());

