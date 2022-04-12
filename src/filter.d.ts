import type { ColorToColor, Mode } from './common';

type Filter = (amt?: number, mode?: Mode) => ColorToColor;

export declare const filterBrightness: Filter;
export declare const filterContrast: Filter;
export declare const filterSepia: Filter;
export declare const filterSaturate: Filter;
export declare const filterGrayscale: Filter;
export declare const filterInvert: Filter;
export declare const filterHueRotate: Filter;
