const highlight = require('@11ty/eleventy-plugin-syntaxhighlight');

module.exports = function (env) {
	env.addPassthroughCopy('docs/img');
	env.addPassthroughCopy('docs/css');
	env.addPassthroughCopy({ 'docs/static': '.' });

	env.addFilter('sortby', function (arr, key) {
		return arr.slice().sort((a, b) => {
			if (a.data[key] > b.data[key]) {
				return 1;
			}
			if (a.data[key] < b.data[key]) {
				return -1;
			}
			return 0;
		});
	});
	env.addPlugin(highlight);
	return {
		pathPrefix: '/',
		dir: {
			input: 'docs',
			output: 'www'
		},
		htmlTemplateEngine: 'njk'
	};
};
