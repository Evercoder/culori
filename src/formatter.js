import converter from './converter';
import round from './round';
import clamp from './util/clamp';

let rgb = converter('rgb'),
	roundAlpha = round(2);

export default (format = 'rgb') => 
	c => {
		
		let color = rgb(c);

		if (color === undefined) {
			return undefined;
		}

		let r = clamp(color.r);
		let b = clamp(color.b);
		let g = clamp(color.g);

		if (format === 'hex') {
			return '#' + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
		}

		if (format === 'rgb') {
			if (c.alpha === undefined || c.alpha === 1) {
				// opaque color
				return `rgb(${r}, ${g}, ${b})`;
			} else {
				// transparent color
				return `rgba(${r}, ${g}, ${b}, ${ roundAlpha(c.alpha) })`;
			}
		}
	}