const converters = {};
const _channels = {};
const parsers = [];

const defineMode = ({ mode, input, output, channels, parsers: p  }) => {
	converters[mode] = Object.assign(converters[mode] || {}, output);
	Object.keys(input || {}).forEach(k => {
		if (!converters[k]) {
			converters[k] = {};
		}
		converters[k][mode] = input[k];
	});
	_channels[mode] = channels.concat('alpha');
	(p || []).forEach(parser => parsers.push(parser));
}

const getChannels = (mode) => _channels[mode];

export { 
	defineMode, 
	getChannels, 
	converters, 
	parsers 
};