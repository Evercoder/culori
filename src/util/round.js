// See: https://github.com/d3/d3-format/issues/32
export default function round(value, precision = 4) {
	return value === undefined ? 
		undefined : Math.round(value * (precision = Math.pow(10, precision))) / precision;
}
	