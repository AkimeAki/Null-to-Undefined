module.exports = {
	singleQuote: false,
	jsxSingleQuote: false,
	printWidth: 120,
	semi: true,
	trailingComma: "none",
	plugins: [],
	overrides: [
		{
			files: "*.code-workspace",
			options: {
				parser: "json"
			}
		}
	]
};
