import { defineConfig } from 'cypress';

const doCoverageTask = async (on, config) => {
  const codeCoverageTask = await import('@cypress/code-coverage/task');
  codeCoverageTask.default(on, config);
};

export default defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      await doCoverageTask(on, config);
      return config;
    },
    baseUrl: 'http://localhost:5173/#',
    requestTimeout: 15_000,
  },
  component: {
    async setupNodeEvents(on, config) {
      await doCoverageTask(on, config);
      return config;
    },
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
});
