import ardisLocators from '../support/ardisLocators'

export function navigate(){
    cy.visit('https://staging-ardis.polixis.com/search')
    
}
export function login(){
	cy.xpath(ardisLocators.username).type("testing.art");
    cy.xpath(ardisLocators.password).type("a&sTE9R1X&Obe9I3L!")
    cy.xpath(ardisLocators.loginButton).click()
}

export function search(){
    cy.xpath(ardisLocators.inputSearchField).type("770303428416")
    cy.xpath(ardisLocators.searchButton).click()
}
