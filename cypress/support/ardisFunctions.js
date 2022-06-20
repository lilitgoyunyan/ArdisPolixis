import ardisLocators from '../support/ardisLocators'

export function navigate(){
    cy.visit('https://staging-ardis.polixis.com/search')
}

export function getXpath(locator){
    cy.xpath(locator)
}

export function getCSS(locator){
    cy.get(locator)
}

export function clickCSS(locator){
	cy.get(locator).click()
}

export function clickXpath(locator){
	cy.xpath(locator).click()
}

export function waiter(){
	cy.wait(1000);
}

export function login(){
	cy.xpath(ardisLocators.username).type("testing.art");
    cy.xpath(ardisLocators.password).type("a&sTE9R1X&Obe9I3L!")
    clickXpath(ardisLocators.loginButton)
}

export function searchWithTIN(){
    cy.xpath(ardisLocators.inputSearchField).type("770303428416")
    clickXpath(ardisLocators.searchButton)
}

export function listElements(locator, arr){
    arr.forEach(text => {
        cy.xpath(locator).should('contain', text);
    });
}

export function containsText(locator, arr){
    arr.forEach(text => {
        cy.xpath(locator).should('contain', text);
    });
}

export function xpathFunctionWithIndex(index){
    return "(//*[@class='wordBreak'])[" + index + "]"
}

export function xpathFunctionWithString(string){
    return "//*[contains(text()," + string + ")]"
}

export function xpathFunctionWithTwoStrings(string){
    return "//*[contains(text(), 'Related " + string + "')]"
}