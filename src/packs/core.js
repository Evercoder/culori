import rgbDef from '../rgb/definition.js';
import lrgbDef from '../lrgb/definition.js';
import a98Def from '../a98/definition.js';
import p3Def from '../p3/definition.js';
import prophotoDef from '../prophoto/definition.js';
import rec2020Def from '../rec2020/definition.js';
import hslDef from '../hsl/definition.js';
import hsvDef from '../hsv/definition.js';
import hwbDef from '../hwb/definition.js';

import labDef from '../lab/definition.js';
import lchDef from '../lch/definition.js';
import xyzDef from '../xyz/definition.js';

import lab65Def from '../lab65/definition.js';
import lch65Def from '../lch65/definition.js';
import xyz65Def from '../xyz65/definition.js';

import { defineMode } from '../modes.js';
import converter from '../converter.js';

defineMode(a98Def);
defineMode(hslDef);
defineMode(hsvDef);
defineMode(hwbDef);
defineMode(labDef);
defineMode(lchDef);
defineMode(lrgbDef);
defineMode(p3Def);
defineMode(prophotoDef);
defineMode(rec2020Def);
defineMode(rgbDef);
defineMode(xyzDef);

defineMode(lab65Def);
defineMode(lch65Def);
defineMode(xyz65Def);

let lab65 = converter('lab65');
let lch65 = converter('lch65');
let xyz65 = converter('xyz65');

let a98 = converter('a98');
let hsl = converter('hsl');
let hsv = converter('hsv');
let hwb = converter('hwb');
let lab = converter('lab');
let lch = converter('lch');
let lrgb = converter('lrgb');
let p3 = converter('p3');
let prophoto = converter('prophoto');
let rec2020 = converter('rec2020');
let rgb = converter('rgb');
let xyz = converter('xyz');

export {
	a98,
	converter,
	defineMode,
	hsl,
	hsv,
	hwb,
	lab,
	lch,
	lrgb,
	p3,
	prophoto,
	rec2020,
	rgb,
	xyz,
	lab65,
	lch65,
	xyz65
};

export {
	formatHex,
	formatHex8,
	formatRgb,
	formatHsl,
	formatCss
} from '../formatter.js';
