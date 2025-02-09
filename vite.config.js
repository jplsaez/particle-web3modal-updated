import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

import dotenv from 'dotenv';

dotenv.config(); // load env vars from .env

/*
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
  },
  define: {
    'process.env': process.env,
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'esnext',
    },
  },
  build: {
      target: ["esnext"],
  },
})
*/

export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react()],
    server: {
      host: '0.0.0.0',
    },    
    define: {
      __VITE_WALLETCONNECT_PROJECT_ID__: JSON.stringify(env.VITE_WALLETCONNECT_PROJECT_ID),
      __VITE_PROJECT_ID__: JSON.stringify(env.VITE_PROJECT_ID),
      __VITE_APP_ID__: JSON.stringify(env.VITE_APP_ID),
      __VITE_CLIENT_KEY__: JSON.stringify(env.VITE_CLIENT_KEY),
    },
    optimizeDeps: {
      esbuildOptions: {
        target: 'esnext',
      },
    },
    build: {
        target: ["esnext"],
    },
  }
})