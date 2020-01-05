module.exports = {
	automock: true,
	collectCoverageFrom: [
		"src/**/*.ts",
		"src/**/*.tsx",
		"!**/*.d.ts"
	],
	moduleFileExtensions: [
		"json",
		"ts",
		"tsx",
		"js",
		"node"
	],
	modulePathIgnorePatterns: ["<rootDir>/github-feed-*"],
	setupFilesAfterEnv: ["<rootDir>/testHelpers/environmentSetup.js"],
	testEnvironment: "node",
	testMatch: ['<rootDir>/src/**/*.(spec|test).[t]s?(x)'],
	timers: "fake",
	unmockedModulePathPatterns: [
		"<rootDir>/testHelpers",
		"<rootDir>/node_modules/aphrodite",
		"<rootDir>/node_modules/bluebird",
		"<rootDir>/node_modules/enzyme",
		"<rootDir>/node_modules/tslib",
		"<rootDir>/node_modules/react"
	]
}