import random from './random';
import round from './round';
import blend from './blend';
import { average } from './average';

const _a = random('rgb', {
	r: 1
});
console.log(_a);

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

const d = average(['salmon', 'tomato'], 'lab');
console.log(d);
