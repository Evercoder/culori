import rgbDef from './rgb/definition';
import lrgbDef from './lrgb/definition';
import a98Def from './a98/definition';
import p3Def from './p3/definition';
import prophotoDef from './prophoto/definition';
import rec2020Def from './rec2020/definition';
import hslDef from './hsl/definition';
import hsvDef from './hsv/definition';
import hsiDef from './hsi/definition';
import hwbDef from './hwb/definition';
import jabDef from './jab/definition';
import jchDef from './jch/definition';
import labDef from './lab/definition';
import lab65Def from './lab65/definition';
import lchDef from './lch/definition';
import lch65Def from './lch65/definition';
import luvDef from './luv/definition';
import lchuvDef from './lchuv/definition';
import cubehelixDef from './cubehelix/definition';
import dlabDef from './dlab/definition';
import dlchDef from './dlch/definition';
import xyzDef from './xyz/definition';
import xyz65Def from './xyz65/definition';
import yiqDef from './yiq/definition';
import oklabDef from './oklab/definition';
import oklchDef from './oklch/definition';

import { defineMode } from './modes';
import converter from './converter';

defineMode(a98Def);
defineMode(cubehelixDef);
defineMode(dlabDef);
defineMode(dlchDef);
defineMode(hsiDef);
defineMode(hslDef);
defineMode(hsvDef);
defineMode(hwbDef);
defineMode(jabDef);
defineMode(jchDef);
defineMode(labDef);
defineMode(lab65Def);
defineMode(lchDef);
defineMode(lch65Def);
defineMode(lchuvDef);
defineMode(lrgbDef);
defineMode(luvDef);
defineMode(p3Def);
defineMode(prophotoDef);
defineMode(rec2020Def);
defineMode(rgbDef);
defineMode(xyz65Def);
defineMode(xyzDef);
defineMode(yiqDef);
defineMode(oklabDef);
defineMode(oklchDef);

let a98 = converter('a98');
let cubehelix = converter('cubehelix');
let dlab = converter('dlab');
let dlch = converter('dlch');
let hsi = converter('hsi');
let hsl = converter('hsl');
let hsv = converter('hsv');
let hwb = converter('hwb');
let jab = converter('jab');
let jch = converter('jch');
let lab = converter('lab');
let lab65 = converter('lab65');
let lch = converter('lch');
let lch65 = converter('lch65');
let lchuv = converter('lchuv');
let lrgb = converter('lrgb');
let luv = converter('luv');
let p3 = converter('p3');
let prophoto = converter('prophoto');
let rec2020 = converter('rec2020');
let rgb = converter('rgb');
let xyz = converter('xyz');
let xyz65 = converter('xyz65');
let yiq = converter('yiq');
let oklab = converter('oklab');
let oklch = converter('oklch');

export {
	a98,
	converter,
	cubehelix,
	defineMode,
	dlab,
	dlch,
	hsi,
	hsl,
	hsv,
	hwb,
	jab,
	jch,
	lab,
	lab65,
	lch,
	lch65,
	lchuv,
	lrgb,
	luv,
	p3,
	prophoto,
	rec2020,
	rgb,
	xyz,
	xyz65,
	yiq,
	oklab,
	oklch
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
	interpolatorSplineBasisClosed
} from './interpolate/splineBasis';

export {
	interpolateSplineNatural, // @deprecated
	interpolatorSplineNatural,
	interpolatorSplineNaturalClosed
} from './interpolate/splineNatural';

export {
	interpolateSplineMonotone, // @deprecated
	interpolatorSplineMonotone,
	interpolatorSplineMonotone2,
	interpolatorSplineMonotoneClosed
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
	differenceKotsarenkoRamos,
	differenceHueSaturation,
	differenceHueChroma,
	differenceHueNaive
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

export {
	deficiencyProt as filterDeficiencyProt,
	deficiencyDeuter as filterDeficiencyDeuter,
	deficiencyTrit as filterDeficiencyTrit,
	// @deprecated
	deficiencyProt,
	deficiencyDeuter,
	deficiencyTrit
} from './deficiency';

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

export {
	mapper,
	mapAlphaMultiply,
	mapAlphaDivide,
	mapTransferLinear,
	mapTransferGamma
} from './map';

export {
	filterBrightness,
	filterContrast,
	filterSepia,
	filterInvert,
	filterSaturate,
	filterGrayscale,
	filterHueRotate
} from './filter';

export { average, averageAngle, averageNumber } from './average';
