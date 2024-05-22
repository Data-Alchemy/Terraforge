import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';

const basenameProd = '/react-shadcn-starter/';

export default defineConfig(({ command }) => {
  const isProd = command === 'build';

  return {
    base: isProd ? basenameProd : '',
    plugins: [
      react(),
      commonjs(),
      nodeResolve({ browser: true }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    define: {
      'process.env': {},
      global: 'globalThis',
    },
    build: {
      outDir: 'build',
      rollupOptions: {
        external: [],
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString();
            }
          },
        },
      },
      chunkSizeWarningLimit: 1000,
    },
  };
});
