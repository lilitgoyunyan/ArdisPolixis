import ardisLocators from "./ardisLocators";
export function searchResultCountAssertion(){
	cy.get(ardisLocators.resultCount).should('include.text', '1');
}