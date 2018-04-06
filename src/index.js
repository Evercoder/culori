import css from './css';
import round from './round';
import converter from './converter';
import named from './colors/named';
import interpolate, { interpolateLinear, interpolateAlpha, interpolateHue } from './interpolate';
import samples from './samples';

import parse from './parse';

import { defineMode, getModeDefinition } from './modes';

import rgbDef from './rgb/definition';
import lrgbDef from './lrgb/definition';
import hslDef from './hsl/definition';
import hsvDef from './hsv/definition';
import hsiDef from './hsi/definition';
import hwbDef from './hwb/definition';
import labDef from './lab/definition';
import lchDef from './lch/definition';

defineMode(rgbDef);
defineMode(lrgbDef);
defineMode(hslDef);
defineMode(hsvDef);
defineMode(hsiDef);
defineMode(hwbDef);
defineMode(labDef);
defineMode(lchDef);

let rgb = converter('rgb');
let lrgb = converter('lrgb');
let hsl = converter('hsl');
let hsv = converter('hsv');
let hsi = converter('hsi');
let hwb = converter('hwb');
let lab = converter('lab');
let lch = converter('lch');

const culori = rgb;

export {
	hsl,
	hsv,
	hsi,
	hwb,
	rgb,
	lab,
	lch,
	lrgb,
	css,
	converter,
	round,
	parse,
	named,
	interpolate,
	interpolateLinear,
	interpolateAlpha,
	interpolateHue,
	samples,

	defineMode,
	getModeDefinition
};

export default culori;