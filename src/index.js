import css from './css';
import round from './round';
import convert from './convert';
import named from './colors/named';
import map from './map';
import interpolate from './interpolate';
import samples from './samples';

import parse from './parse';

import { defineMode } from './mode/index';

import rgbDef from './mode/rgb/definition';
import lrgbDef from './mode/lrgb/definition';
import hslDef from './mode/hsl/definition';
import hsvDef from './mode/hsv/definition';
import hsiDef from './mode/hsi/definition';
import hwbDef from './mode/hwb/definition';
import labDef from './mode/lab/definition';
import lchDef from './mode/lch/definition';

defineMode(rgbDef);
defineMode(lrgbDef);
defineMode(hslDef);
defineMode(hsvDef);
defineMode(hsiDef);
defineMode(hwbDef);
defineMode(labDef);
defineMode(lchDef);

let rgb = convert('rgb');
let lrgb = convert('lrgb');
let hsl = convert('hsl');
let hsv = convert('hsv');
let hsi = convert('hsi');
let hwb = convert('hwb');
let lab = convert('lab');
let lch = convert('lch');

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
	convert,
	round,
	parse,
	named,
	map,
	interpolate,
	samples
};

export default culori;