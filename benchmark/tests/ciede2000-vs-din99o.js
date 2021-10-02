import {
	nearest,
	differenceCiede2000,
	differenceDin99o
} from '../../src/index.js';
import benchmark from '../util/benchmark.js';

let colors = Object.keys(culori.colorsNamed);

let ciede2000 = nearest(colors, differenceCiede2000());
let din99o = nearest(colors, differenceDin99o());

benchmark('ciede2000', () => {
	for (var k = 0; k < 100; k++) {
		for (var i = 0; i < colors.length; i++) {
			ciede2000(colors[i]);
		}
	}
});

benchmark('din99o', () => {
	for (var k = 0; k < 100; k++) {
		for (var i = 0; i < colors.length; i++) {
			din99o(colors[i]);
		}
	}
});
