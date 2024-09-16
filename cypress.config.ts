import { defineConfig } from "cypress";
import { baseUrl } from "./test/e2e/constants";

export default defineConfig({
    e2e: {
        baseUrl: baseUrl,
        supportFile: "test/support/e2e.ts",
        specPattern: "test/e2e/**/*.cy.{js,jsx,ts,tsx}",
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
});
