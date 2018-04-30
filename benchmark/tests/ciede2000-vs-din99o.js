let culori = require('../../build/culori');
let benchmark = require('../util/benchmark');

let colors = Object.keys(culori.colorsNamed);


let ciede2000 = culori.nearest(colors, culori.differenceCiede2000());
let din99o = culori.nearest(colors, culori.differenceDin99o());


benchmark('ciede2000', () => {
	for (var k = 0; k < 100; k++) {
		for (var i = 0; i < colors.length; i++) {
			ciede2000(colors[i]);
		}
	}
})

benchmark('din99o', () => {
	for (var k = 0; k < 100; k++) {
		for (var i = 0; i < colors.length; i++) {
			din99o(colors[i]);
		}
	}
})