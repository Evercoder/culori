import type { Color, Find, Mode, OverridesObject } from '../common';

type ColorPosition = [Color | string, number];

declare function interpolate<M extends Mode>(
	colors: Array<Color | string | ColorPosition | ((t: number) => number)>,
	mode?: M,
	overrides?: OverridesObject<M>
): (t: number) => Find<Color, M>;
