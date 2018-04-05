const converters = {};
const components = {};
const parsers = [];

const defineMode = ({ mode, input, output, keys, parsers: p  }) => {
	converters[mode] = Object.assign(converters[mode] || {}, output);
	Object.keys(input || {}).forEach(k => {
		if (!converters[k]) {
			converters[k] = {};
		}
		converters[k][mode] = input[k];
	});
	components[mode] = keys;
	(p || []).forEach(parser => parsers.push(parser));
}

export { defineMode, components, converters, parsers };