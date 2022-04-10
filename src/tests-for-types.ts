import random from './random';
import round from './round';

random('rgb', {
	r: 1
});

const a = round(2);
const b: number = 2;
const n = a(b);
console.log(n);
