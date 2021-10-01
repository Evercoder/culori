// Color space definitions
import modeA98 from './a98/definition.js';
import modeHsl from './hsl/definition.js';
import modeHsv from './hsv/definition.js';
import modeHwb from './hwb/definition.js';
import modeLab from './lab/definition.js';
import modeLab65 from './lab65/definition.js';
import modeLch from './lch/definition.js';
import modeLch65 from './lch65/definition.js';
import modeLrgb from './lrgb/definition.js';
import modeP3 from './p3/definition.js';
import modeProphoto from './prophoto/definition.js';
import modeRec2020 from './rec2020/definition.js';
import modeRgb from './rgb/definition.js';
import modeXyz from './xyz/definition.js';
import modeXyz65 from './xyz65/definition.js';
import { useMode } from './modes.js';

export { default as converter } from './converter.js';

export {
	formatHex,
	formatHex8,
	formatRgb,
	formatHsl,
	formatCss
} from './formatter.js';

export { default as colorsNamed } from './colors/named.js';
export { default as blend } from './blend.js';
export { default as random } from './random.js';

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

export { average, averageAngle, averageNumber } from './average.js';

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
export { useMode, getMode } from './modes.js';
export { default as parse } from './parse.js';

export {
	differenceEuclidean,
	differenceCie76,
	differenceCie94,
	differenceCiede2000,
	differenceCmc,
	differenceHyab,
	differenceHueSaturation,
	differenceHueChroma,
	differenceHueNaive,
	differenceKotsarenkoRamos
} from './difference.js';

export {
	filterBrightness,
	filterContrast,
	filterSepia,
	filterInvert,
	filterSaturate,
	filterGrayscale,
	filterHueRotate
} from './filter.js';

export {
	filterDeficiencyProt,
	filterDeficiencyDeuter,
	filterDeficiencyTrit
} from './deficiency.js';

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
	modeA98,
	modeHsl,
	modeHsv,
	modeHwb,
	modeLab,
	modeLch,
	modeLrgb,
	modeP3,
	modeProphoto,
	modeRec2020,
	modeRgb,
	modeXyz,
	modeLab65,
	modeLch65,
	modeXyz65
};

export const a98 = useMode(modeA98);
export const hsl = useMode(modeHsl);
export const hsv = useMode(modeHsv);
export const hwb = useMode(modeHwb);
export const lab = useMode(modeLab);
export const lab65 = useMode(modeLab65);
export const lch = useMode(modeLch);
export const lch65 = useMode(modeLch65);
export const lrgb = useMode(modeLrgb);
export const p3 = useMode(modeP3);
export const prophoto = useMode(modeProphoto);
export const rec2020 = useMode(modeRec2020);
export const rgb = useMode(modeRgb);
export const xyz = useMode(modeXyz);
export const xyz65 = useMode(modeXyz65);
