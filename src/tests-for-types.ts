import random from './random';
import round from './round';
import blend from './blend';
import { average } from './average';
import converter from './converter';
import { clampChroma, clampRgb } from './clamp';
import type { Rgb } from './rgb/types';
import type { Color } from './common';
import type { Oklch } from './oklch/types';
import { filterBrightness } from './filter';
import { mapper, mapTransferLinear } from './map';
import type { Hsl } from './hsl/types';
import parseTransparent from './rgb/parseTransparent';
import parse from './parse';
import { Mode } from './common';
import prepare from './_prepare';

const _a = random('rgb', {
	r: 1
});
console.log(_a);

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

const g: Rgb = clampRgb({
	mode: 'rgb',
	r: 0.2549019607843137,
	g: 0.4117647058823529,
	b: 0.8823529411764706
});

const h: Color = clampChroma('rgb(300, 255, 255)');
const k: Oklch = clampChroma({
	mode: 'oklch',
	l: 0.5,
	c: 0.161,
	h: 180
});
const l: Oklch = clampChroma(
	{ mode: 'oklch', l: 0.5, c: 0.16, h: 180 },
	'oklch'
);

const m: Color = filterBrightness(1.2)('hsl(60 100% 50% / 25%)');
// const n: OklchWithMode = filterBrightness(1.2)({
// 	mode: 'oklch',
// 	l: 0.5,
// 	c: 0.161,
// 	h: 180
// });

const n: Rgb = mapper(mapTransferLinear(2))({
	mode: 'rgb',
	r: 0.8,
	g: 0,
	b: 0.2
});

const o: Hsl = filterBrightness(1)({
	mode: 'hsl',
	h: 1,
	s: 1,
	l: 1
});

const p1: undefined = parseTransparent('asd');
const p2: Rgb = parseTransparent('transparent');

const pr: undefined = prepare(undefined);
const pr2: Color | undefined = prepare('red');
const pr3: Rgb = prepare({
	mode: 'rgb',
	r: 0.2549019607843137,
	g: 0.4117647058823529,
	b: 0.8823529411764706
});
const pr4: Rgb = prepare(
	{
		r: 0.2549019607843137,
		g: 0.4117647058823529,
		b: 0.8823529411764706
	},
	'rgb'
);
const pr5: undefined = prepare({
	r: 0.2549019607843137,
	g: 0.4117647058823529,
	b: 0.8823529411764706
});

// declare function prepare<M extends Mode>(
// 	color: Omit<Color, 'mode'> & { mode?: M },
// 	mode: M
// ): Color;
// declare function prepare<M extends Mode>(
// 	color: Omit<Color, 'mode'> & { mode?: M },
// 	mode: undefined
// ): undefined;
