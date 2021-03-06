import ardisLocators from '../support/ardisLocators'
import { clickHereNewsSearchAssertion } from './ardisAssertions'

export function navigate() {
    cy.visit('https://staging-ardis.polixis.com/search')
}

export function getXpath(locator) {
    cy.xpath(locator)
}

export function getCSS(locator) {
    cy.get(locator)
}

export function clickCSS(locator) {
    cy.get(locator).click()
}

export function clickXpath(locator) {
    cy.xpath(locator).click()
}

export function waiter() {
    cy.wait(6000);
}

export function login() {
    cy.xpath(ardisLocators.username).type("testing.art");
    cy.xpath(ardisLocators.password).type("a&sTE9R1X&Obe9I3L!")
    clickXpath(ardisLocators.loginButton)
}

export function searchWithTIN(tinNumber) {
    cy.xpath(ardisLocators.inputSearchField).type(tinNumber)
    clickXpath(ardisLocators.searchButton)
}

export function listElements(locator, arr) {
    arr.forEach(text => {
        cy.xpath(locator).should('contain', text);
    });
}
export function listElementsSecond(locator, arr) {
    arr.forEach(text => {
        cy.xpath(locator).should('include.text', text);
    });
}
export function containsText(locator, arr) {
    arr.forEach(text => {
        cy.xpath(locator).should('contain', text);
    });
}

export function xpathFunctionWithIndex(index) {
    return "(//*[@class='wordBreak'])[" + index + "]"
}

export function xpathFunctionWithString(string) {
    return "//*[contains(text()," + string + ")]"
}

export function xpathFunctionWithTwoStrings(string) {
    return "//*[contains(text(), 'Related " + string + "')]"
}
export function xpathFunctionNameFiller(name) {
    return "//*[@class='col-xs-10']//*[contains(text(),'" + name + "')]"
}
export function xpathFunctionRussian(name){
    return "(//*[contains(text(),'" + name + "')])[1]"
}
export function xpathFunctionExtendedRussian(name){
   return  "(//div[contains(text(),'" + name + "')]//parent::div/div[2])[1]"
}
export function navigateToExplore() {
    clickXpath(ardisLocators.continue)
    clickCSS(ardisLocators.keyIdentifiers)
}
export function navigateToPoliticalProfile() {
    clickCSS(ardisLocators.politicalProfile)
}
export function navigateToBusinessProfile() {
    waiter()
    clickCSS(ardisLocators.businessProfile)
}
export function navigateToJudicial() {
    clickCSS(ardisLocators.judicial)
}
export function navigateToRelationships() {
    clickCSS(ardisLocators.relationships)
}
export function navigateToNewsSearchExplore() {
    clickCSS(ardisLocators.newsSearchExplore)
    clickHereNewsSearchAssertion()
    clickXpath(ardisLocators.clickHere)
}
export function clickMore() {
    cy.get('.left-side > :nth-child(1) img[alt*="doneImage"]').click()
}
export function xpathContainsText(text) {
    return "//*[contains(text(),'" + text + "')]"
}
export function exploreFunction() {
    cy.get('.btn-selected-result > :nth-child(3)').click()
}

export function chooseResult() {
    cy.get(ardisLocators.loader, { timeout: 40000 }).should('not.be.visible');
    cy.get(ardisLocators.pointer).click({ force: true });
}

export function clickExploreButton() {
    cy.get(ardisLocators.explore).should('be.visible');
    cy.get(ardisLocators.explore).click({ timeout: 1000 });
    cy.get(ardisLocators.continue).click();
    waiter();
}

export function searchWithName(name) {
    cy.xpath(ardisLocators.inputSearchField).type(name)
    clickXpath(ardisLocators.searchButton)
}
export function helperClear(locator){
    cy.xpath(locator).focus().clear()
}