import random from './random';
import round from './round';
import blend from './blend';
import { average } from './average';
import converter from './converter';
import { clampChroma, clampRgb } from './clamp';
import type { RgbWithMode } from './rgb/types';
import type { Color } from './common';
import type { OklchWithMode } from './oklch/types';

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

const e = converter('lab')('#f0f0f0');
console.log(e);

const f: Color = clampRgb('rgba(255, 0, 0, 0.5)');

const g: RgbWithMode = clampRgb({
	mode: 'rgb',
	r: 0.2549019607843137,
	g: 0.4117647058823529,
	b: 0.8823529411764706
});

const h: Color = clampChroma('rgb(300, 255, 255)');
const k: OklchWithMode = clampChroma({
	mode: 'oklch',
	l: 0.5,
	c: 0.161,
	h: 180
});
const l: OklchWithMode = clampChroma(
	{ mode: 'oklch', l: 0.5, c: 0.16, h: 180 },
	'oklch'
);
