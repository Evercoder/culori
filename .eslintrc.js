module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		node: true
	},
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module'
	},
	plugins: ['import'],
	rules: {
		'constructor-super': 1,
		'import/no-anonymous-default-export': 1,
		'import/no-unused-modules': 1,
		'no-const-assign': 1,
		'no-this-before-super': 1,
		'no-undef': 2,
		'no-unreachable': 0,
		'no-unused-expressions': 0,
		'no-unused-vars': [1, { args: 'none' }],
		'valid-typeof': 1
	}
};
