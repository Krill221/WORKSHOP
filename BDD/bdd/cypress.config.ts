import { defineConfig } from "cypress";
import webpackPreprocessor from "@cypress/webpack-preprocessor/dist";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import 'dotenv/config';

export default defineConfig({
  e2e: {
    baseUrl: `${process.env.TEST_URL}`,
    specPattern: "**/*.feature",
    setupNodeEvents,
  },
});

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  const options = {
    webpackOptions: {
      resolve: {
        extensions: [".ts", ".js"],
      },
      module: {
        rules: [
          {
            test: /\.ts$/,
            exclude: [/node_modules/],
            use: [
              {
                loader: "ts-loader",
              },
            ],
          },
          {
            test: /\.feature$/,
            use: [
              {
                loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                options: config,
              },
            ],
          },
        ],
      },
    },
  }

  on(
    "file:preprocessor",
    webpackPreprocessor(options)
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}