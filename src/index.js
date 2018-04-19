import formatter from './formatter';
import round from './round';
import converter from './converter';
import interpolate from './interpolate/interpolate'; 
import interpolateNumber from './interpolate/interpolateNumber';
import interpolateAlpha from './interpolate/interpolateAlpha';
import interpolateHue from './interpolate/interpolateHue';
import interpolateFunctionLinear from './interpolate/interpolateFunctionLinear';
import interpolateFunctionSpline from './interpolate/interpolateFunctionSpline';
import interpolateFunctionCosine from './interpolate/interpolateFunctionCosine';
import interpolateFunctionMonotone from './interpolate/interpolateFunctionMonotone';
import samples from './samples';
import zip from './zip';

import {
	differenceEuclidean, 
	differenceCie76, 
	differenceCie94,
	differenceCiede2000,
	differenceCmc
} from './difference';
import nearest from './nearest';

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
import dlabDef from './dlab/definition';
import dlchDef from './dlch/definition';

import colorsNamed from './colors/named';

defineMode(rgbDef);
defineMode(lrgbDef);
defineMode(hslDef);
defineMode(hsvDef);
defineMode(hsiDef);
defineMode(hwbDef);
defineMode(labDef);
defineMode(lchDef);
defineMode(cubehelixDef);
defineMode(dlabDef);
defineMode(dlchDef);

let rgb = converter('rgb');
let lrgb = converter('lrgb');
let hsl = converter('hsl');
let hsv = converter('hsv');
let hsi = converter('hsi');
let hwb = converter('hwb');
let lab = converter('lab');
let lch = converter('lch');
let cubehelix = converter('cubehelix');
let dlab = converter('dlab');
let dlch = converter('dlch');

const culori = rgb;

export {
	
	// Color spaces
	hsl,
	hsv,
	hsi,
	hwb,
	rgb,
	lab,
	lch,
	lrgb,
	cubehelix,
	dlab,
	dlch,

	// Basics
	formatter,
	converter,
	round,
	parse,

	// Interpolation
	interpolate,
	interpolateNumber,
	interpolateAlpha,
	interpolateHue,
	
	interpolateFunctionLinear,
	interpolateFunctionSpline,
	interpolateFunctionCosine,
	interpolateFunctionMonotone,

	samples,

	// Difference
	differenceEuclidean, 
	differenceCie76, 
	differenceCie94,
	differenceCiede2000,
	differenceCmc,

	nearest,
	
	// Extending Culori
	defineMode,
	getModeDefinition,

	// Colors
	colorsNamed
};

export default culori;