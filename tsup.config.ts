// tsup.config.ts
import { defineConfig } from 'tsup';

export default defineConfig({
	entry: ["src/index.tsx"],
	format: ["esm", "cjs"],
	dts: {
    entry: 'src/index.tsx',
    resolve: true,
    compilerOptions: {
      tsconfig: 'tsconfig.build.json',
    },
  },
	sourcemap: true,
	clean: true,
	external: ['react', 'react-dom']
});
