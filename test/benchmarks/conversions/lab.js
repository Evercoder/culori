let { lab } = require('d3-color');
let chroma = require('chroma-js');
let { map, rgb, lab: lab2 } = require('../../../');

const getLabValues = () => {
	return {
		l: Math.floor(Math.random() * 100),
		a: Math.floor(Math.random() * 200 - 100),
		b: Math.floor(Math.random() * 200 - 100)
	}
}

for (var i = 0; i < 100; i++) {
	let color = getLabValues();
	console.log('\n-----\n');
	console.log(color);
	console.log('chroma', chroma.lab(color.l, color.a, color.b));
	console.log('d3-color', lab(color.l, color.a, color.b).rgb());
	console.log('culori', map(rgb(lab2(color)), (k,v) => 'rgb'.indexOf(k) > -1 ? v * 255 : v ));

}
// 
// console.log('d3-color\n', lab("#abcdef"), lab("#abcdef").rgb());
// console.log('culori\n', lab2("#abcdef"), map(rgb(lab2("#abcdef")), (k,v) => 'rgb'.indexOf(k) > -1 ? v * 255 : v ));