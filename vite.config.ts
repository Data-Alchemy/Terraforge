import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';

const basenameProd = '/react-shadcn-starter';

export default defineConfig(({ command }) => {
  const isProd = command === 'build';

  return {
    base: isProd ? basenameProd : '',
    plugins: [
      react(),
      commonjs(),
      nodeResolve({ browser: true }), // Ensure browser field resolution
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    define: {
      'process.env': {},
      global: 'globalThis', // Ensure globalThis is defined
    },
    build: {
      outDir: 'build', // Set the output directory for the build
      rollupOptions: {
        external: [], // External modules configuration
      },
    },
  };
});
