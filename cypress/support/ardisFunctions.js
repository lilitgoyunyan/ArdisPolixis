import ardisLocators from '../support/ardisLocators'
import { clickHereNewsSearchAssertion } from './ardisAssertions'

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
//is this okay?
export function searchWithTIN(tinNumber){
    cy.xpath(ardisLocators.inputSearchField).type(tinNumber)
    clickXpath(ardisLocators.searchButton)
}

export function listElements(locator, arr){
    arr.forEach(text => {
        cy.xpath(locator).should('contain', text);
    });
}
export function listElementsSecond(locator, arr){
    arr.forEach(text => {
        cy.xpath(locator).should('include.text', text);
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
export function xpathFunctionNameFiller(name){
    return "//*[@class='col-xs-10']//*[contains(text(),'" + name +"')]"
}
export function navigateToExplore(){
    clickCSS(ardisLocators.explore)
    clickXpath(ardisLocators.continue)
    clickCSS(ardisLocators.keyIdentifiers)
}
export function navigateToPoliticalProfile(){
    clickCSS(ardisLocators.politicalProfile)
}
export function navigateToBusinessProfile(){
    waiter()
    clickCSS(ardisLocators.businessProfile)
}
export function navigateToJudicial(){
    clickCSS(ardisLocators.judicial)
}
export function navigateToRelationships(){
    clickCSS(ardisLocators.relationships)
}
export function navigateToNewsSearchExplore(){
    clickCSS(ardisLocators.newsSearchExplore)
    clickHereNewsSearchAssertion()
    clickXpath(ardisLocators.clickHere)
}
export function clickMore(){
    cy.get('.left-side > :nth-child(1) img[alt*="doneImage"]').click()
}
export function xpathContainsText(text){
    return "//*[contains(text(),'" + text + "')]"
}