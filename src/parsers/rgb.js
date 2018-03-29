// https://drafts.csswg.org/css-color/#rgb-functions
// 

// converts a regexp to string
// (does not cover all cases, but for our purposes it works)
const s = r => r.toString().replace(/^\/|\/$/g, '');

// matches a number
let n = /\s*([+-]?\d*\.?\d+(?:[eE][+-]?\d+)?)\s*/;

// matches a percentage
let p = /\s*([+-]?\d*\.?\d+(?:[eE][+-]?\d+)?)%\s*/;

// matches a number or percentage
let np = `(?:${s(n)}|${s(p)})`;

let rgb_legacy = new RegExp(`^rgba?\\(${np},${np},${np}(?:,${np})\\)`);
let rgb_current = new RegExp(`^rgba?\\(${np}\\s+${np}\\s+${np}(?:\\s*\\/\\s*${np})\\)`);


export default color => {
	if (typeof color !== 'string') return;
	let match = color.match(rgb_legacy) || color.match(rgb_current);
	if (!match) return;

	return [
		match[1] === undefined ? match[2] / 100 : match[1] / 255, 
		match[3] === undefined ? match[4] / 100 : match[3] / 255, 
		match[5] === undefined ? match[6] / 100 : match[5] / 255
	].concat(
		match[7] === undefined ? 
			match[8] === undefined ? [] : [match[8] / 100] 
			: [match[7] / 255]
	);
}