import converter from './converter';
import round from './round';
let rgb = converter('rgb');
let roundAlpha = round(2);
let clamp = v => Math.round(Math.max(0, Math.min(v, 1)) * 255);

export default (format = 'rgb') => 
	c => {
		let color = rgb(c);
		color.r = clamp(color.r);
		color.b = clamp(color.b);
		color.g = clamp(color.g);

		if (format === 'hex') {
			return '#' + (1 << 24 | color.r << 16 | color.g << 8 | color.b).toString(16).slice(1);
		}

		if (format === 'rgb') {
			if (c.alpha === undefined || c.alpha === 1) {
				// opaque color
				return `rgb(${color.r}, ${color.g}, ${color.b})`;
			} else {
				// transparent color
				return `rgba(${color.r}, ${color.g}, ${color.b}, ${ roundAlpha(color.alpha) })`;
			}
		}
	}