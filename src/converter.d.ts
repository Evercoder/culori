import { Color, FindColorByMode, Mode } from './common';

export type ConvertFn<M extends Mode> = (
	color: Color | string
) => FindColorByMode<M> | undefined;

declare function converter(): ConvertFn<'rgb'>;
declare function converter<M extends Mode>(target_mode: M): ConvertFn<M>;

export default converter;
