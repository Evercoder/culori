import type { Mode } from './common';

export declare function differenceHueSaturation(
	colorA: { h: number; s: number },
	colorB: { h: number; s: number }
): number;

export declare function differenceHueNaive(
	colorA: { h: number },
	colorB: { h: number }
): number;

export declare function differenceHueChroma(
	colorA: { h: number; c: number },
	colorB: { h: number; c: number }
): number;

export type DiffFn = (colorA: Color | string, colorB: Color | string) => number;

export declare function differenceEuclidean(
	mode?: Mode,
	weights?: [number, number, number, number]
): DiffFn;

export declare const differenceCie76 = () => DiffFn;

export declare const differenceCie94 = (
	kL?: number,
	K1?: number,
	K2?: number
) => DiffFn;

export declare const differenceCiede2000 = (
	Kl?: number,
	Kc?: number,
	Kh?: number
) => DiffFn;

export declare const differenceCmc = (l?: number, c?: number) => DiffFn;

export declare const differenceHyab = () => DiffFn;

export const differenceKotsarenkoRamos = () => DiffFn;
