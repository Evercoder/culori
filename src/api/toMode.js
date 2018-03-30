import {
	IS_RGB,
	IS_HSL,
	IS_HSI,
	IS_HSV
} from './flags';

export default color => {
	if (color.flags & IS_RGB) return 'rgb';
	if (color.flags & IS_HSL) return 'hsl';
	if (color.flags & IS_HSV) return 'hsv';
	if (color.flags & IS_HSI) return 'hsi';
	return undefined;
}