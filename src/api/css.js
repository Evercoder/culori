import rgb from './rgb';
import round from './round';

export default (c, format = 'rgb') => {

	let color = rgb(c);

	let r = Math.round(color.r * 255);
	let g = Math.round(color.g * 255);
	let b = Math.round(color.b * 255);

	if (format === 'hex') {
		return '#' + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
	}

	if (format === 'rgb') {
		if (color['a'] === undefined || color['a'] === 1) {
			// opaque color
			return `rgb(${r}, ${g}, ${b})`;
		} else {
			// transparent color
			return `rgba(${r}, ${g}, ${b}, ${ color[a] })`;
		}
	}
}