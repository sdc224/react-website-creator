/*
👋 Hi! This file was autogenerated by tslint-to-eslint-config.
https://github.com/typescript-eslint/tslint-to-eslint-config

It represents the closest reasonable ESLint configuration to this
project's original TSLint configuration.

We recommend eventually switching this configuration to extend from
the recommended rulesets in typescript-eslint.
https://github.com/typescript-eslint/tslint-to-eslint-config/blob/master/docs/FAQs.md

Happy linting! 💖
*/
module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true
	},
	extends: [
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",

		/* Uses eslint-config-prettier to disable ESLint rules
		 * from @typescript-eslint/eslint-plugin that would conflict with prettier
		 */
		"prettier/@typescript-eslint",
		/* Enables eslint-plugin-prettier and eslint-config-prettier.
		 * This will display prettier errors as ESLint errors.
		 * Make sure this is always the last configuration in the extends array.
		 */
		"plugin:prettier/recommended"
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		project: "tsconfig.json",
		tsconfigRootDir: __dirname,
		sourceType: "module"
	},
	plugins: [
		"eslint-plugin-no-null",
		"eslint-plugin-import",
		"eslint-plugin-jsdoc",
		"eslint-plugin-prefer-arrow",
		"@typescript-eslint",
		"@typescript-eslint/tslint"
	],
	rules: {
		"@typescript-eslint/adjacent-overload-signatures": "error",
		"@typescript-eslint/array-type": [
			"error",
			{
				default: "array-simple"
			}
		],
		"@typescript-eslint/ban-types": [
			"error",
			{
				types: {
					Object: {
						message:
							"Avoid using the `Object` type. Did you mean `object`?"
					},
					Function: {
						message:
							"Avoid using the `Function` type. Prefer a specific function type, like `() => void`."
					},
					Boolean: {
						message:
							"Avoid using the `Boolean` type. Did you mean `boolean`?"
					},
					Number: {
						message:
							"Avoid using the `Number` type. Did you mean `number`?"
					},
					String: {
						message:
							"Avoid using the `String` type. Did you mean `string`?"
					},
					Symbol: {
						message:
							"Avoid using the `Symbol` type. Did you mean `symbol`?"
					}
				}
			}
		],
		"@typescript-eslint/consistent-type-assertions": "error",
		"@typescript-eslint/consistent-type-definitions": "error",
		"@typescript-eslint/dot-notation": "error",
		"@typescript-eslint/explicit-member-accessibility": [
			"error",
			{
				accessibility: "explicit"
			}
		],
		"@typescript-eslint/member-delimiter-style": [
			"error",
			{
				multiline: {
					delimiter: "semi",
					requireLast: true
				},
				singleline: {
					delimiter: "semi",
					requireLast: false
				}
			}
		],
		"@typescript-eslint/member-ordering": "error",
		"@typescript-eslint/naming-convention": "off",
		"@typescript-eslint/no-empty-function": "error",
		"@typescript-eslint/no-empty-interface": "off",
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/no-inferrable-types": [
			"error",
			{
				ignoreParameters: true
			}
		],
		"@typescript-eslint/no-misused-new": "error",
		"@typescript-eslint/no-namespace": "off",
		"@typescript-eslint/no-parameter-properties": "off",
		"@typescript-eslint/no-shadow": [
			"error",
			{
				hoist: "all"
			}
		],
		"@typescript-eslint/no-unused-expressions": "error",
		"@typescript-eslint/no-unsafe-assignment": "warn",
		"@typescript-eslint/no-unsafe-call": "warn",
		"@typescript-eslint/no-unsafe-member-access": "warn",
		"@typescript-eslint/no-unsafe-return": "warn",
		"@typescript-eslint/no-use-before-define": "off",
		"@typescript-eslint/no-var-requires": "error",
		"@typescript-eslint/prefer-for-of": "error",
		"@typescript-eslint/prefer-function-type": "error",
		"@typescript-eslint/prefer-namespace-keyword": "error",
		"@typescript-eslint/quotes": [
			"error",
			"double",
			{
				avoidEscape: true
			}
		],
		"@typescript-eslint/triple-slash-reference": [
			"error",
			{
				path: "always",
				types: "prefer-import",
				lib: "always"
			}
		],
		"@typescript-eslint/type-annotation-spacing": "error",
		"@typescript-eslint/unified-signatures": "error",
		"arrow-body-style": "error",
		"arrow-parens": ["off", "always"],
		"brace-style": ["error", "1tbs"],
		complexity: "off",
		"constructor-super": "error",
		curly: "error",
		"default-case": "error",
		"eol-last": "error",
		eqeqeq: ["error", "smart"],
		"guard-for-in": "error",
		"id-blacklist": "off",
		"id-match": "off",
		"import/order": "off",
		"jsdoc/check-alignment": "error",
		"jsdoc/check-indentation": "error",
		"jsdoc/newline-after-description": "error",
		"max-classes-per-file": "off",
		"max-len": [
			"error",
			{
				code: 160
			}
		],
		"new-parens": "error",
		"no-bitwise": "error",
		"no-caller": "error",
		"no-cond-assign": "error",
		"no-console": [
			"error",
			{
				allow: [
					"log",
					"warn",
					"dir",
					"timeLog",
					"assert",
					"clear",
					"count",
					"countReset",
					"group",
					"groupEnd",
					"table",
					"dirxml",
					"error",
					"groupCollapsed",
					"Console",
					"profile",
					"profileEnd",
					"timeStamp",
					"context"
				]
			}
		],
		"no-debugger": "error",
		"no-empty": "error",
		"no-eval": "error",
		"no-fallthrough": "error",
		"no-invalid-this": "off",
		"no-multiple-empty-lines": "error",
		"no-new-wrappers": "error",
		"no-null/no-null": "error",
		"no-redeclare": "error",
		"no-throw-literal": "error",
		"no-trailing-spaces": "error",
		"no-undef-init": "off",
		"no-underscore-dangle": "off",
		"no-unsafe-finally": "error",
		"no-unused-labels": "error",
		"no-var": "error",
		"object-shorthand": "error",
		"one-var": ["error", "never"],
		"prefer-arrow/prefer-arrow-functions": "error",
		"prefer-const": "error",
		"quote-props": ["error", "consistent-as-needed"],
		radix: "error",
		"space-before-function-paren": [
			"error",
			{
				anonymous: "never",
				asyncArrow: "always",
				named: "never"
			}
		],
		"spaced-comment": [
			"error",
			"always",
			{
				markers: ["/"]
			}
		],
		"use-isnan": "error",
		"valid-typeof": "off",
		"@typescript-eslint/tslint/config": [
			"error",
			{
				rules: {
					"import-spacing": true,
					typedef: [true, "call-signature", "parameter"],
					whitespace: [
						true,
						"check-branch",
						"check-decl",
						"check-operator",
						"check-separator",
						"check-type"
					]
				}
			}
		]
	}
};
