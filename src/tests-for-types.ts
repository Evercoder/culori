import { clampChroma, clampRgb } from './clamp';
import type { Rgb } from './rgb/types';
import type { Color } from './common';
import type { Oklch } from './oklch/types';
import parseTransparent from './rgb/parseTransparent';
import prepare from './_prepare';

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
