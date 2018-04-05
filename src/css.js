import converter from './converter';
import round from './round';
import transform from './transform';

let clampRGB = transform(
	(v, k) => k === 'alpha' ? v : Math.round(Math.max(0, Math.min(v, 1)) * 255)
);

let rgb = converter('rgb');
let roundAlpha = round(2);

export default (format = 'rgb') => 
	c => {
		let color = clampRGB(rgb(c));

		if (format === 'hex') {
			return '#' + (1 << 24 | color.r << 16 | color.g << 8 | color.b).toString(16).slice(1);
		}

		if (format === 'rgb') {
			if (color.alpha === undefined || color.alpha === 255) {
				// opaque color
				return `rgb(${color.r}, ${color.g}, ${color.b})`;
			} else {
				// transparent color
				return `rgba(${color.r}, ${color.g}, ${color.b}, ${ roundAlpha(color.alpha) })`;
			}
		}
	}