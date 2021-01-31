module.exports = {
	transform: {
		".(ts|tsx)": "<rootDir>/test/preprocessor.js"
	},
	testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
	moduleFileExtensions: ["ts", "tsx", "js", "json"],
	testEnvironment: "node",
	setupTestFrameworkScriptFile: "./test/unit/lib/setup.ts"
};
