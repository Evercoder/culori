import type { Color, Find, Mode } from './common';

export declare function clampRgb(color: string): Color;
export declare function clampRgb<C extends Find<Color, M>, M extends Mode>(
	color: C
): C;

export declare function clampChroma(color: string): Color;
export declare function clampChroma<C extends Color>(color: C): C;
export declare function clampChroma<
	C extends Find<Color, M>,
	M extends Mode = 'lch'
>(color: C, mode: M): C;
