import random from './random';
import round from './round';
import blend from './blend';

random('rgb', {
	r: 1
});

const a = round(2);
const b: number = 2;
const n = a(b);
console.log(n);

const c = blend(
	['rgba(255, 0, 0, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(0, 0, 255, 0.5)'],
	'screen',
	'hsl'
);
console.log([c.h, c.s, c.l, c.alpha]);
