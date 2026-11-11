import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig } from 'vite';

export default defineConfig(({mode, isSsrBuild}) => {
  return {
    plugins: [react(), tailwindcss()],
    build: {
      manifest: !isSsrBuild,
      copyPublicDir: !isSsrBuild,
      rollupOptions: isSsrBuild ? undefined : {
        input: { app: path.resolve(__dirname, 'index.html'), contacts: path.resolve(__dirname, 'src/contact-boot.ts') },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {

      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
