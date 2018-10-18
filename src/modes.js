const converters = {};
const modes = {};
const parsers = [];

const defineMode = definition => {
	converters[definition.mode] = Object.assign(
		converters[definition.mode] || {},
		definition.output
	);
	Object.keys(definition.input || {}).forEach(k => {
		if (!converters[k]) {
			converters[k] = {};
		}
		converters[k][definition.mode] = definition.input[k];
	});
	modes[definition.mode] = definition;
	(definition.parsers || []).forEach(parser => parsers.push(parser));
};

const getModeDefinition = mode => modes[mode];

export { defineMode, getModeDefinition, converters, parsers };
