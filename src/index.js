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
import yiqDef from './yiq/definition';

import { defineMode } from './modes';
import converter from './converter';

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
defineMode(yiqDef);

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
let yiq = converter('yiq');

export {
	defineMode,
	converter,
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
	yiq
};

export { default as formatter } from './formatter';
export { default as round } from './round';
export { default as interpolate } from './interpolate/interpolate';
export { default as interpolateHue } from './interpolate/hue';
export { default as interpolateAlpha } from './interpolate/alpha';

export { default as interpolateLinear } from './interpolate/linear';
export { default as interpolateCosine } from './interpolate/cosine';
export { default as interpolateSplineBasis } from './interpolate/splineBasis';
export {
	default as interpolateSplineNatural
} from './interpolate/splineNatural';
export {
	default as interpolateSplineMonotone
} from './interpolate/splineMonotone';

export { default as samples } from './samples';
export { default as displayable } from './displayable';
export { default as clamp } from './clamp';
export { default as nearest } from './nearest';
export { getModeDefinition } from './modes';
export { default as parse } from './parse';
export {
	differenceEuclidean,
	differenceCie76,
	differenceCie94,
	differenceCiede2000,
	differenceCmc,
	differenceDin99o,
	differenceKotsarenkoRamos
} from './difference';
export { default as colorsNamed } from './colors/named';
export { default as blend } from './blend';
export { default as random } from './random';
