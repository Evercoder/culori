
// From: https://github.com/d3/d3-format/issues/32

const r = (value, precision) => Math.round(value * (precision = Math.pow(10, precision))) / precision;

export default (precision = 4) => value => typeof value === 'number' ? r(value, precision) : value