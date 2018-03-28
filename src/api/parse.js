// const parse = c => ({
// 	normalized: { 
// 		r: 1, 
// 		g: 0.5, 
// 		b: 0.1,
// 		a: 1 
// 	},
// 	parsed: {
// 		h: 1,
// 		s: 1,
// 		l: 1,
// 		a: undefined,
// 		format: 'hsl'
// 	}
// });
// 

const formats = [{
		name: 'hsl',
		matcher: /hsla?/,
		parse: c => `${c} hsl`
	}, {
		name: 'hsv',
		matcher: /hsva?/,
		parse: c => `${c} hsv`
	},{
		name: 'rgb',
		matcher: /rgba?/,
		parse: c => `${c} rgb`
	},{
		name: 'hex',
		matcher: /#fff/,
		parse: c => `${c} hex`
	}
];

const parse = c => {
	let f = formats.find(f => c.match(f.matcher));
	if (f) {
		return f.parse(c);
	} else {
		throw Erorr(`Unknown color: ${c}`);
	}
};

export default parse;