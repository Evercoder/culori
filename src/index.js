import rgbDef from './rgb/definition';
import lrgbDef from './lrgb/definition';
import hslDef from './hsl/definition';
import hsvDef from './hsv/definition';
import hsiDef from './hsi/definition';
import hwbDef from './hwb/definition';
import labDef from './lab/definition';
import lchDef from './lch/definition';
import luvDef from './luv/definition';
import lchuvDef from './lchuv/definition';
import cubehelixDef from './cubehelix/definition';
import dlabDef from './dlab/definition';
import dlchDef from './dlch/definition';
import xyzDef from './xyz/definition';
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
defineMode(luvDef);
defineMode(lchuvDef);
defineMode(cubehelixDef);
defineMode(dlabDef);
defineMode(dlchDef);
defineMode(yiqDef);
defineMode(xyzDef);

let rgb = converter('rgb');
let lrgb = converter('lrgb');
let hsl = converter('hsl');
let hsv = converter('hsv');
let hsi = converter('hsi');
let hwb = converter('hwb');
let lab = converter('lab');
let lch = converter('lch');
let luv = converter('luv');
let lchuv = converter('lchuv');
let cubehelix = converter('cubehelix');
let dlab = converter('dlab');
let dlch = converter('dlch');
let yiq = converter('yiq');
let xyz = converter('xyz');

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
	luv,
	lchuv,
	lrgb,
	cubehelix,
	dlab,
	dlch,
	yiq,
	xyz
};

export { formatter, formatHex, formatHex8, formatRgb } from './formatter';
export { default as round } from './round';
export {
	interpolate,
	interpolateWith,
	interpolateWithPremultipliedAlpha
} from './interpolate/interpolate';

export {
	interpolateLinear, // @deprecated
	interpolatorLinear
} from './interpolate/linear';

export { interpolatorPiecewise } from './interpolate/piecewise';

// @deprecated
export { default as interpolateCosine } from './interpolate/cosine';

export {
	interpolateSplineBasis, // @deprecated
	interpolatorSplineBasis,
	interpolatorSplineBasisClosed,
	interpolatorSplineBasisOpen
} from './interpolate/splineBasis';

export {
	interpolateSplineNatural, // @deprecated
	interpolatorSplineNatural,
	interpolatorSplineNaturalClosed,
	interpolatorSplineNaturalOpen
} from './interpolate/splineNatural';

export {
	interpolateSplineMonotone, // @deprecated
	interpolatorSplineMonotone,
	interpolatorSplineMonotoneClosed,
	interpolatorSplineMonotoneOpen
} from './interpolate/splineMonotone';

export { default as lerp } from './interpolate/lerp';
export { default as samples } from './samples';
export { default as displayable } from './displayable';
export { clamp, clampRgb, clampChroma } from './clamp';
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

// Easings
export { default as easingMidpoint } from './easing/midpoint';
export { default as easingSmoothstep } from './easing/smoothstep';
export { default as easingSmootherstep } from './easing/smootherstep';
export { default as easingInOutSine } from './easing/inOutSine';
export { default as easingGamma } from './easing/gamma';

export { luminance as wcagLuminance, contrast as wcagContrast } from './wcag';

export { deficiencyProt, deficiencyDeuter, deficiencyTrit } from './deficiency';

export {
	fixupHueShorter as interpolateHue, // @deprecated
	fixupHueShorter,
	fixupHueLonger,
	fixupHueIncreasing,
	fixupHueDecreasing
} from './fixup/hue';

export {
	fixupAlpha,
	fixupAlpha as interpolateAlpha // @deprecated
} from './fixup/alpha';

export { mapper, mapAlphaMultiply, mapAlphaDivide } from './map';
