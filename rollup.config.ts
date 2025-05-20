import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export default [
	// Build code (JS)
	{
		input: "src/index.tsx",
		output: [
			{file: "dist/index.cjs.js", format: "cjs", sourcemap: true},
			{file: "dist/index.esm.js", format: "esm", sourcemap: true},
		],
		external: ["react", "react-dom"],
		plugins: [
			resolve({preferBuiltins: false}), // ✅ giúp resolve ESM module
			commonjs(), // ✅ hỗ trợ CJS nếu cần
			json(), // ✅ để import JSON (ví dụ emoji-mart)
			typescript({tsconfig: "./tsconfig.build.json"}),
		],
	},
	{
		input: "src/index.tsx",
		output: [
			{
				dir: "dist",
				format: "esm",
				sourcemap: true,
				preserveModules: true,
				preserveModulesRoot: "src",
			},
		],
	},
];
