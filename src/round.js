// From: https://github.com/d3/d3-format/issues/32
export default function round(precision = 4) {
	return value =>
		typeof value === 'number'
			? Math.round(value * (precision = Math.pow(10, precision))) /
			  precision
			: value;
}
