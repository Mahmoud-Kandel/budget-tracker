import { elementsId } from "./constants";
import { baseUrl } from "./constants";

describe("example to-do app", () => {
    beforeEach(() => {
        cy.visit(baseUrl);
    });

    it("displays two todo items by default", () => {
        console.log("import.meta.env.VITE_QRCODE_HOST");
        console.log(import.meta.env.VITE_QRCODE_HOST);
        cy.get(`#${elementsId.summaryChartsContainer}`).should("exist");
    });
});
