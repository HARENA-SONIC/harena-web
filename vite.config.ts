import { defineConfig, loadEnv } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import istanbul from 'vite-plugin-istanbul';
import viteTsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env': env,
    },
    plugins: [
      react(),
      viteTsconfigPaths(),
      istanbul({
        cypress: true,
        requireEnv: false,
        include: 'src/*',
        exclude: ['node_modules', 'cypress'],
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  };
});
