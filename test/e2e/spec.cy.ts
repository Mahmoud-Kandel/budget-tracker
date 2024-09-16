import { elementsId } from "./constants";
import { baseUrl } from "./constants";

describe("example to-do app", () => {
    beforeEach(() => {
        cy.visit(baseUrl);
    });

    it("displays two todo items by default", () => {
        cy.get(`#${elementsId.summaryChartsContainer}`).should("exist");
    });
});
