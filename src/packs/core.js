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

import { useMode } from '../modes.js';
import converter from '../converter.js';

useMode(a98Def);
useMode(hslDef);
useMode(hsvDef);
useMode(hwbDef);
useMode(labDef);
useMode(lchDef);
useMode(lrgbDef);
useMode(p3Def);
useMode(prophotoDef);
useMode(rec2020Def);
useMode(rgbDef);
useMode(xyzDef);

useMode(lab65Def);
useMode(lch65Def);
useMode(xyz65Def);

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
	useMode,
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

export { default as colorsNamed } from '../colors/named.js';
export { default as blend } from '../blend.js';
export { default as random } from '../random.js';

export {
	fixupHueShorter,
	fixupHueLonger,
	fixupHueIncreasing,
	fixupHueDecreasing
} from '../fixup/hue.js';

export { fixupAlpha } from '../fixup/alpha.js';

export {
	mapper,
	mapAlphaMultiply,
	mapAlphaDivide,
	mapTransferLinear,
	mapTransferGamma
} from '../map.js';

export { average, averageAngle, averageNumber } from '../average.js';

export { default as round } from '../round.js';
export {
	interpolate,
	interpolateWith,
	interpolateWithPremultipliedAlpha
} from '../interpolate/interpolate.js';

export { interpolatorLinear } from '../interpolate/linear.js';

export { interpolatorPiecewise } from '../interpolate/piecewise.js';

export {
	interpolatorSplineBasis,
	interpolatorSplineBasisClosed
} from '../interpolate/splineBasis.js';

export {
	interpolatorSplineNatural,
	interpolatorSplineNaturalClosed
} from '../interpolate/splineNatural.js';

export {
	interpolatorSplineMonotone,
	interpolatorSplineMonotone2,
	interpolatorSplineMonotoneClosed
} from '../interpolate/splineMonotone.js';

export { default as lerp } from '../interpolate/lerp.js';
export { default as samples } from '../samples.js';
export { default as displayable } from '../displayable.js';
export { clampRgb, clampChroma } from '../clamp.js';
export { default as nearest } from '../nearest.js';
export { getMode } from '../modes.js';
export { default as parse } from '../parse.js';

export {
	differenceEuclidean,
	differenceCie76,
	differenceCie94,
	differenceCiede2000,
	differenceCmc,
	differenceHyab,
	differenceHueSaturation,
	differenceHueChroma,
	differenceHueNaive
} from '../difference.js';

export {
	filterBrightness,
	filterContrast,
	filterSepia,
	filterInvert,
	filterSaturate,
	filterGrayscale,
	filterHueRotate
} from '../filter.js';

export {
	filterDeficiencyProt,
	filterDeficiencyDeuter,
	filterDeficiencyTrit
} from '../deficiency.js';

// Easings
export { default as easingMidpoint } from '../easing/midpoint.js';
export { default as easingSmoothstep } from '../easing/smoothstep.js';
export { default as easingSmootherstep } from '../easing/smootherstep.js';
export { default as easingInOutSine } from '../easing/inOutSine.js';
export { default as easingGamma } from '../easing/gamma.js';

export {
	luminance as wcagLuminance,
	contrast as wcagContrast
} from '../wcag.js';
