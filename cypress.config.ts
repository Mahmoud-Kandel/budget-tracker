import { defineConfig } from "cypress";

export default defineConfig({
    e2e: {
        supportFile: "test/support/e2e.ts",
        specPattern: "test/e2e/**/*.cy.{js,jsx,ts,tsx}",
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
});
