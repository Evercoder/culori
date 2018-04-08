import formatter from './formatter';
import round from './round';
import converter from './converter';
import named from './colors/named';
import colorbrewer from './colors/colorbrewer';
import interpolate, { 
	interpolateNumber, 
	interpolateAlpha, 
	interpolateHue,
	interpolateMethodLinear
} from './interpolate';
import samples from './samples';
import zip from './zip';
import difference from './difference';

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
import cubehelixDef from './cubehelix/definition';

defineMode(rgbDef);
defineMode(lrgbDef);
defineMode(hslDef);
defineMode(hsvDef);
defineMode(hsiDef);
defineMode(hwbDef);
defineMode(labDef);
defineMode(lchDef);
defineMode(cubehelixDef);

let rgb = converter('rgb');
let lrgb = converter('lrgb');
let hsl = converter('hsl');
let hsv = converter('hsv');
let hsi = converter('hsi');
let hwb = converter('hwb');
let lab = converter('lab');
let lch = converter('lch');
let cubehelix = converter('cubehelix');

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
	cubehelix,
	formatter,
	converter,
	round,
	parse,
	named,
	interpolate,
	interpolateNumber,
	interpolateAlpha,
	interpolateHue,
	interpolateMethodLinear,
	samples,
	defineMode,
	getModeDefinition,
	difference,
	colorbrewer
};

export default culori;