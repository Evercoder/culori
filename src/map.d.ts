import type { Color, Find, Mode } from './common';
import type { Rgb } from './rgb/types';

type Channel = string;

export type MapFn<M extends Mode | null> = (
	v: number,
	ch: string,
	conv_color: M extends Mode ? Find<Color, M> : Color,
	mode: M extends null ? null : M
) => number;

interface ColorToRgbMapper {
	(color: Color): Rgb;
	(color: string): Rgb | undefined;
}

interface ColorToSameColorMapper {
	<M extends Mode>(color: Find<Color, M>): Find<Color, M>;
	(color: string): Color | undefined;
}

interface ColorToPredefinedColorMapper<M extends Mode> {
	(color: Color): Find<Color, M>;
	(color: string): Find<Color, M> | undefined;
}

declare function mapper(fn: MapFn<'rgb'>): ColorToRgbMapper;
declare function mapper(
	fn: MapFn<Mode>,
	mode: null,
	preserve_mode?: false
): ColorToSameColorMapper;
declare function mapper(
	fn: MapFn<'rgb'>,
	mode: undefined,
	preserve_mode?: false
): ColorToRgbMapper;
declare function mapper<M extends Mode>(
	fn: MapFn<M>,
	mode: M,
	preserve_mode?: false
): ColorToPredefinedColorMapper<M>;
declare function mapper(
	fn: MapFn<Mode>,
	mode: null,
	preserve_mode: true
): ColorToSameColorMapper;
declare function mapper(
	fn: MapFn<'rgb'>,
	mode: undefined,
	preserve_mode: true
): ColorToSameColorMapper;
declare function mapper<M extends Mode>(
	fn: MapFn<M>,
	mode: M,
	preserve_mode: true
): ColorToSameColorMapper;

declare function mapAlphaMultiply(v: number, ch: Channel, c: Color): number;

declare function mapAlphaDivide(v: number, ch: Channel, c: Color): number;

declare function mapTransferLinear(
	slope?: number,
	intercept?: number
): (v: number, ch: Channel) => number;

declare function mapTransferGamma(
	amplitude?: number,
	exponent?: number,
	offset?: number
): (v: number, ch: Channel) => number;

export {
	mapper,
	mapAlphaMultiply,
	mapAlphaDivide,
	mapTransferLinear,
	mapTransferGamma
};
