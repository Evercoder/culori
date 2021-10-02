import converter from './converter.js';

const converters = {};
const modes = {};

const parsers = [];
const colorProfiles = {};

const identity = v => v;

const useMode = definition => {
	converters[definition.mode] = {
		...converters[definition.mode],
		...definition.toMode
	};

	Object.keys(definition.fromMode || {}).forEach(k => {
		if (!converters[k]) {
			converters[k] = {};
		}
		converters[k][definition.mode] = definition.fromMode[k];
	});

	// Color space channel ranges
	if (!definition.ranges) {
		definition.ranges = {};
	}

	if (!definition.difference) {
		definition.difference = {};
	}

	definition.channels.forEach(channel => {
		// undefined channel ranges default to the [0, 1] interval
		if (definition.ranges[channel] === undefined) {
			definition.ranges[channel] = [0, 1];
		}

		if (!definition.interpolate[channel]) {
			throw new Error(`Missing interpolator for: ${channel}`);
		}

		if (typeof definition.interpolate[channel] === 'function') {
			definition.interpolate[channel] = {
				use: definition.interpolate[channel]
			};
		}

		if (!definition.interpolate[channel].fixup) {
			definition.interpolate[channel].fixup = identity;
		}
	});

	modes[definition.mode] = definition;
	(definition.parse || []).forEach(parser => {
		if (typeof parser === 'function') {
			useParser(parser);
		} else if (typeof parser === 'string') {
			colorProfiles[parser] = definition.mode;
		}
	});

	return converter(definition.mode);
};

const getMode = mode => modes[mode];

const useParser = parser => {
	const idx = parsers.indexOf(parser);
	if (idx < 0) {
		parsers.push(parser);
	}
};

const removeParser = parser => {
	const idx = parsers.indexOf(parser);
	if (idx > 0) {
		parsers.splice(idx, 1);
	}
};

export {
	useMode,
	getMode,
	useParser,
	removeParser,
	converters,
	parsers,
	colorProfiles
};
