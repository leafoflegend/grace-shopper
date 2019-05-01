module.exports = {
	extends: ['eslint:recommended', 'prettier', 'plugin:react/recommended'], // extending recommended config and config derived from eslint-config-prettier
	plugins: ['prettier', 'react'], // activating esling-plugin-prettier (--fix stuff)
	rules: {
		'prettier/prettier': [
			// customizing prettier rules (unfortunately not many of them are customizable)
			'error',
			{
				singleQuote: true,
				trailingComma: 'all'
			}
		],
		eqeqeq: ['error', 'always'] // adding some custom ESLint rules
	},
	settings: {
		react: {
			createClass: 'createReactClass', // Regex for Component Factory to use,
			// default to "createReactClass"
			pragma: 'React', // Pragma to use, default to "React"
			version: 'detect', // React version. "detect" automatically picks the version you have installed.
			// You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
			flowVersion: '0.53' // Flow version
		},
		propWrapperFunctions: [
			// The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
			'forbidExtraProps',
			{ property: 'freeze', object: 'Object' },
			{ property: 'myFavoriteWrapper' }
		]
	}
};