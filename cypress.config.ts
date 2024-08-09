import { defineConfig } from 'cypress';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import createEsbuildPlugin from '@badeball/cypress-cucumber-preprocessor/esbuild';
import {spawn} from 'child_process';

export default defineConfig({
  chromeWebSecurity: false,
  watchForFileChanges: false,
  e2e: {
    experimentalRunAllSpecs: true,
    specPattern: "cypress/integration/**/*.{js,feature}",
    async setupNodeEvents(on, config) {
			await addCucumberPreprocessorPlugin(on, config);
			on(
				'file:preprocessor',
				createBundler({
					plugins: [createEsbuildPlugin(config)],
				})
			);

			return config;
    },
    baseUrl: 'https://www.airalo.com/'
  },
  env: {
    apiUrl: 'https://sandbox-partners-api.airalo.com/v2/'
	},
  retries: 1
});
