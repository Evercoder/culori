import converter from './converter.js';

let rgb = converter('rgb');

const displayable = color => {
	let c = rgb(color);
	return (
		c !== undefined &&
		c.r >= 0 &&
		c.r <= 1 &&
		c.g >= 0 &&
		c.g <= 1 &&
		c.b >= 0 &&
		c.b <= 1
	);
};

export default displayable;
