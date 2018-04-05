import converter from './converter';
import round from './round';
import toArray from './toArray';

let rgb = converter('rgb');
let roundAlpha = round(2);
let clamp = v => Math.round(Math.max(0, Math.min(v, 1)) * 255);

export default (format = 'rgb') => 
	c => {
		let color = toArray()(rgb(c))
			.slice(0, 3)
			.map(clamp)
			.concat([c.alpha === 1 ? undefined : c.alpha ]);

		if (format === 'hex') {
			return '#' + (1 << 24 | color[0] << 16 | color[1] << 8 | color[2]).toString(16).slice(1);
		}

		if (format === 'rgb') {
			if (color[3] === undefined) {
				// opaque color
				return `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
			} else {
				// transparent color
				return `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${ roundAlpha(color[3]) })`;
			}
		}
	}