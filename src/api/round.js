// See: https://github.com/d3/d3-format/issues/32
const r = (value, precision) => Math.round(value * (precision = Math.pow(10, precision))) / precision;

export default function round(value, precision = 4) {
	
	if (value === undefined) {
		return undefined;
	}

	if (typeof value === 'number') {
		return r(value, precision);
	}

	if (typeof value === 'object') {
		return Object.keys(value).reduce((o, k) => (o[k] = k !== 'flags' ? round(value[k]) : value[k], o), {});
	}
}
	