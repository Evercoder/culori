module.exports = function(env) {
	env.addPassthroughCopy('docs/img');
	env.addPassthroughCopy('docs/css');
	env.addPlugin(require('@11ty/eleventy-plugin-syntaxhighlight'));
	return {
		pathPrefix: '/culori/',
		dir: {
			input: 'docs',
			output: 'www'
		},
		htmlTemplateEngine: 'njk'
	};
};
