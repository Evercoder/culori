let { map, rgb, lab } = require('../');
let { lab: lab2 } = require('d3-color');

console.log(rgb(lab('lab(70 5 10)')));
let d3c = lab2(70, 5, 10).rgb();
console.log(d3c.r / 255, d3c.g / 255, d3c.b / 255);