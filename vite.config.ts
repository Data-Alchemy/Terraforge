import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const basenameProd = '/'; // Adjust based on your hosting setup

export default defineConfig(({ command }) => {
  const isProd = command === 'build';

  return {
    base: isProd ? basenameProd : '', // Set base URL for production
    plugins: [react()],
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
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString();
            }
          },
        },
      },
    },
    optimizeDeps: {
      include: ['@radix-ui/react-icons'],
    },
  };
});
