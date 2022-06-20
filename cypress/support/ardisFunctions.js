import ardisLocators from '../support/ardisLocators'

export function navigate(){
    cy.visit('https://staging-ardis.polixis.com/search')
    
}
export function clickCSS(locator){
	cy.get(locator).click()
}

export function clickXpath(locator){
	cy.xpath(locator).click()
}

export function waiter(){
	cy.wait(2000);
}

export function login(){
	cy.xpath(ardisLocators.username).type("testing.art");
    cy.xpath(ardisLocators.password).type("a&sTE9R1X&Obe9I3L!")
    clickXpath(ardisLocators.loginButton)
}

export function searchWithTheTIN(){
    cy.xpath(ardisLocators.inputSearchField).type("770303428416")
    clickXpath(ardisLocators.searchButton)
}

export function listElementsFunction(locator, arr){
    arr.forEach(text => {
        cy.xpath(locator).should('contain', text);
    });
	
}

export let array = [
    "Ziyad Manasir",
    "Ziad Khalaf Al-manaser",
    "Ziyad Khalaf Mohammad Al Manaseer",
    "Ziad Khalaf Mohammed Al-manaser",
    "Ziyad Manaseer",
    "Ziyad Khalaf Mohammed Manaseer",
    "Ziad Khalaf Mohamed Manasir",
    "Ziad Khalaf Mohammed Al Manaseer",
    "Ziad Khalaf Al Manasir",
    "Ziyad Al Manassir"
]
