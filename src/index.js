import rgbDef from './rgb/definition.js';
import lrgbDef from './lrgb/definition.js';
import a98Def from './a98/definition.js';
import p3Def from './p3/definition.js';
import prophotoDef from './prophoto/definition.js';
import rec2020Def from './rec2020/definition.js';
import hslDef from './hsl/definition.js';
import hsvDef from './hsv/definition.js';
import hsiDef from './hsi/definition.js';
import hwbDef from './hwb/definition.js';
import jabDef from './jab/definition.js';
import jchDef from './jch/definition.js';
import labDef from './lab/definition.js';
import lab65Def from './lab65/definition.js';
import lchDef from './lch/definition.js';
import lch65Def from './lch65/definition.js';
import luvDef from './luv/definition.js';
import lchuvDef from './lchuv/definition.js';
import cubehelixDef from './cubehelix/definition.js';
import dlabDef from './dlab/definition.js';
import dlchDef from './dlch/definition.js';
import xyzDef from './xyz/definition.js';
import xyz65Def from './xyz65/definition.js';
import yiqDef from './yiq/definition.js';
import oklabDef from './oklab/definition.js';
import oklchDef from './oklch/definition.js';

import { defineMode } from './modes.js';
import converter from './converter.js';

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

export {
	formatHex,
	formatHex8,
	formatRgb,
	formatHsl,
	formatCss
} from './formatter.js';
export { default as round } from './round.js';
export {
	interpolate,
	interpolateWith,
	interpolateWithPremultipliedAlpha
} from './interpolate/interpolate.js';

export { interpolatorLinear } from './interpolate/linear.js';

export { interpolatorPiecewise } from './interpolate/piecewise.js';

export {
	interpolatorSplineBasis,
	interpolatorSplineBasisClosed
} from './interpolate/splineBasis.js';

export {
	interpolatorSplineNatural,
	interpolatorSplineNaturalClosed
} from './interpolate/splineNatural.js';

export {
	interpolatorSplineMonotone,
	interpolatorSplineMonotone2,
	interpolatorSplineMonotoneClosed
} from './interpolate/splineMonotone.js';

export { default as lerp } from './interpolate/lerp.js';
export { default as samples } from './samples.js';
export { default as displayable } from './displayable.js';
export { clampRgb, clampChroma } from './clamp.js';
export { default as nearest } from './nearest.js';
export { getModeDefinition } from './modes.js';
export { default as parse } from './parse.js';

export {
	differenceEuclidean,
	differenceCie76,
	differenceCie94,
	differenceCiede2000,
	differenceCmc,
	differenceHyab,
	differenceDin99o,
	differenceKotsarenkoRamos,
	differenceHueSaturation,
	differenceHueChroma,
	differenceHueNaive
} from './difference.js';
export { default as colorsNamed } from './colors/named.js';
export { default as blend } from './blend.js';
export { default as random } from './random.js';

// Easings
export { default as easingMidpoint } from './easing/midpoint.js';
export { default as easingSmoothstep } from './easing/smoothstep.js';
export { default as easingSmootherstep } from './easing/smootherstep.js';
export { default as easingInOutSine } from './easing/inOutSine.js';
export { default as easingGamma } from './easing/gamma.js';

export {
	luminance as wcagLuminance,
	contrast as wcagContrast
} from './wcag.js';

export {
	filterDeficiencyProt,
	filterDeficiencyDeuter,
	filterDeficiencyTrit
} from './deficiency.js';

export {
	fixupHueShorter,
	fixupHueLonger,
	fixupHueIncreasing,
	fixupHueDecreasing
} from './fixup/hue.js';

export { fixupAlpha } from './fixup/alpha.js';

export {
	mapper,
	mapAlphaMultiply,
	mapAlphaDivide,
	mapTransferLinear,
	mapTransferGamma
} from './map.js';

export {
	filterBrightness,
	filterContrast,
	filterSepia,
	filterInvert,
	filterSaturate,
	filterGrayscale,
	filterHueRotate
} from './filter.js';

export { average, averageAngle, averageNumber } from './average.js';
