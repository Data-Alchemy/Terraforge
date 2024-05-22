import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';

const basenameProd = '/react-shadcn-starter/'; // Ensure the base option ends with a slash

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
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString();
            }
          },
        },
      },
      chunkSizeWarningLimit: 1000, // Adjust chunk size warning limit
    },
  };
});
