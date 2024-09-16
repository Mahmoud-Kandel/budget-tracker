/// <reference types="cypress" />

import { elementsId } from "./constants";

describe("example to-do app", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/");
    });

    it("displays two todo items by default", () => {
        cy.get(`#${elementsId.summaryChartsContainer}`).should("exist");
    });
});
