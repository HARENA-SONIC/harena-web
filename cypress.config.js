import { defineConfig } from 'cypress';

const REQUEST_TIMEOUT = 10000;

export default defineConfig({
  e2e: {
    setupNodeEvents(_on, _config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:5173/#',
    requestTimeout: REQUEST_TIMEOUT,
  },

  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
});
