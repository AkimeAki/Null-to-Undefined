import globals from "globals";
import pluginJs from "@eslint/js";
import configPrettier from "eslint-config-prettier";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
	{ languageOptions: { globals: { ...globals.browser, ...globals.node } } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	{
		files: ["**/*.tsx"],
		...pluginReact.configs.flat.recommended,
		rules: {
			"react/display-name": "off",
			"react/react-in-jsx-scope": "off",
			"react/no-unknown-property": ["error", { ignore: ["css"] }]
		}
	},
	{
		ignores: ["src/env.d.ts", "dist/**/*"]
	},
	configPrettier
];
