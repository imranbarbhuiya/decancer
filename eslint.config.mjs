import common from 'eslint-config-mahir/common';
import edge from 'eslint-config-mahir/edge';
import node from 'eslint-config-mahir/node';
import tsdoc from 'eslint-config-mahir/tsdoc';
import typescript from 'eslint-config-mahir/typescript';

/**
 * @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigArray}
 */
export default [
	...common,
	...node,
	...typescript,
	...edge,
	...tsdoc,
	{
		languageOptions: {
			parserOptions: {
				projectService: {
					allowDefaultProject: ['eslint.config.mjs', 'tsup.config.ts', 'vitest.config.ts'],
					defaultProject: 'tsconfig.eslint.json',
				},
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},
	{
		ignores: ['.github', '.yarn', 'dist'],
	},
];
