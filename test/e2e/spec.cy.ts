import { elementsId } from "./constants";
import { baseUrl } from "./constants";

describe("example to-do app", () => {
    beforeEach(() => {
        cy.visit(baseUrl);
    });

    it("displays two todo items by default", () => {
        cy.get(`#${elementsId.summaryChartsContainer}`).should("exist");
    });
    it("displays two todo items by default", () => {
        // check of className value
        cy.get(`#${elementsId.summaryChartsContainer}`).should(
            "have.class",
            "0xB21f93840906Ea9CD07194F4367c2BB5C120BBB3"
        );
    });
});
