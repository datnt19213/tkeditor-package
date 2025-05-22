import { copyFileSync } from 'fs';
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],      // entry file của thư viện
  format: ['esm', 'cjs'],       // xuất cả ESM và CJS
  dts: true,                    // xuất file .d.ts
  sourcemap: true,              // tạo source map
  clean: true,                  // xóa dist trước khi build
  minify: true,                 // nếu muốn minify
  external: ['react', 'react-dom'], // loại trừ peer dependencies
  
  onSuccess: async () => {
    copyFileSync('src/index.css', 'dist/index.css');
  }
});
