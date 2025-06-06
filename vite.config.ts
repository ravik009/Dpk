
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, (process as any).cwd(), '');

  return {
    plugins: [react()],
    define: {
      // Make `process.env.API_KEY` available in client-side code.
      // Vite replaces this with the actual value at build time.
      // JSON.stringify is important to ensure the value is correctly stringified.
      'process.env.API_KEY': JSON.stringify(env.API_KEY),
      // You can define other process.env variables here if needed
      // 'process.env.NODE_ENV': JSON.stringify(mode),
    },
    // Optional: If you rely on resolving .js and .ts extensions without specifying them
    resolve: {
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
    }
  };
});
