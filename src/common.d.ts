import type { A98 } from './a98/types';
import type { Cubehelix } from './cubehelix/types';
import type { Dlab } from './dlab/types';
import type { Dlch } from './dlch/types';
import type { Hsi } from './hsi/types';
import type { Hsl } from './hsl/types';
import type { Hsv } from './hsv/types';
import type { Hwb } from './hwb/types';
import type { Jab } from './jab/types';
import type { Jch } from './jch/types';
import type { Lab } from './lab/types';
import type { Lab65 } from './lab65/types';
import type { Lch } from './lch/types';
import type { Lch65 } from './lch65/types';
import type { Lchuv } from './lchuv/types';
import type { Lrgb } from './lrgb/types';
import type { Luv } from './luv/types';
import type { Okhsl } from './okhsl/types';
import type { Okhsv } from './okhsv/types';
import type { Oklab } from './oklab/types';
import type { Oklch } from './oklch/types';
import type { P3 } from './p3/types';
import type { Prophoto } from './prophoto/types';
import type { Rec2020 } from './rec2020/types';
import type { Rgb } from './rgb/types';
import type { Xyz50 } from './xyz50/types';
import type { Xyz65 } from './xyz65/types';
import type { Yiq } from './yiq/types';

export type Color =
	| A98
	| Cubehelix
	| Dlab
	| Dlch
	| Hsi
	| Hsl
	| Hsv
	| Hwb
	| Jab
	| Jch
	| Lab
	| Lab65
	| Lch
	| Lch65
	| Lchuv
	| Lrgb
	| Luv
	| Okhsl
	| Okhsv
	| Oklab
	| Oklch
	| P3
	| Prophoto
	| Rec2020
	| Rgb
	| Xyz50
	| Xyz65
	| Yiq;

export type Mode = Pick<Color, 'mode'>['mode'];

export type Find<C, M extends Mode> = C extends { mode: M } ? C : never;

export type TakeColorChannels<M extends Mode> = Omit<Find<Color, M>, 'mode'>;

export type OverridesFunction = (values: number[], channel: string) => number;

export type OverridesObject<M extends Mode> = Partial<{
	[P in keyof TakeColorChannels<M>]: OverridesFunction;
}>;

interface ColorToColor {
	<M1 extends Mode, M2 extends Mode = M1>(color: Find<Color, M1>): Find<
		Color,
		M2
	>;
	(color: string): Color;
}
