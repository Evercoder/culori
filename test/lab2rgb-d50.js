let { map, rgb, lab } = require('../');
let { lab: lab2 } = require('d3-color');

let fs = require('fs');

fs.readFileSync('./datasets/matlab-lab2rgb-d50.txt', 'utf8').split(/\n/).forEach(line => {
	let values = line.split(/\s+/);
	let l = parseFloat(values[0]), 
		a = parseFloat(values[1]), 
		B = parseFloat(values[2]), 
		r = parseFloat(values[3]), 
		g = parseFloat(values[4]), 
		b = parseFloat(values[5]);
	console.log(`input: L ${l}, a ${a}, b ${B}`);
	console.log(`expected: R ${r}, G ${g}, B ${b}`);
	let d3c = lab2(l, a, B).rgb();
	console.log(`d3-color: R ${ d3c.r / 255 }, G ${ d3c.g / 255 } B ${ d3c.b / 255 }`);

	let c = rgb({ mode: 'lab', l: l, a: a, b: B });
	console.log(`culori:   R ${c.r}, G ${c.g}, B ${c.b}`);
})