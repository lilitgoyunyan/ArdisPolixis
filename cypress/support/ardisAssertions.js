import { listElements, listElementsSecond, waiter, xpathFunctionNameFiller } from "./ardisFunctions";
import ardisLocators, { businessProfileCard } from "./ardisLocators";
import ardisNatalyaHelpers from "./ardisNatalyaHelpers";
import ardisRussianLocators, { akaResults_Russian, aka_Russian, remarkResult_Russian, remark_Russian } from "./ardisRussianHelpers";

export function searchResultAssertion(name) {
	waiter()
	cy.get(ardisLocators.resultCount).should('include.text', '1');
	cy.xpath(xpathFunctionNameFiller(name)).should('exist');
	cy.xpath(xpathFunctionNameFiller(name)).should('include.text', name);
}
export function akaAssertion(array) {
	cy.xpath(ardisLocators.aka).should('exist');
	listElements(ardisLocators.akaNamesList, array)
}
export function alertsAssertion(text) {
	cy.xpath(ardisLocators.alerts).should('exist');
	cy.xpath(ardisLocators.alertsList).should('include.text', text)
}

export function avatarAssertion() {
	cy.get(ardisLocators.avatar).should('exist')
}
export function dateOfBirthAssertion(text) {
	cy.xpath(ardisLocators.date).should('exist')
	cy.xpath(ardisLocators.dateOfBirth).should('include.text', text)
}

export function tinAssertion(text) {
	cy.xpath(ardisLocators.tin).should('exist')
	cy.xpath(ardisLocators.tinText).should('include.text', text)
}

export function nationalIdAssertion(text) {
	cy.xpath(ardisLocators.nationalId).should('exist')
	cy.xpath(ardisLocators.nationalIdText).should('include.text', text)
}

export function biographyAssertion(text) {
	cy.xpath(ardisLocators.biography).should('exist')
	cy.xpath(ardisLocators.biographyText).should('contain', text)
}

export function relatedOrgAssertion(text) {
	cy.xpath(ardisLocators.relatedOrg).should('exist')
	cy.xpath(ardisLocators.relatedOrgText).should('have.text', text)
}

export function relatedPeopleAssertion(text) {
	cy.xpath(ardisLocators.relatedPeople).should('exist')
	cy.xpath(ardisLocators.relatedpeopleText).should('contain', text)
}

export function addressAssertion(text) {
	cy.xpath(ardisLocators.address).should('exist')
	cy.xpath(ardisLocators.addressText).should('contain', text)
}

export function jurisdictionAssertion(text) {
	cy.xpath(ardisLocators.jurisdiction).should('exist')
	cy.xpath(ardisLocators.jurisdictionText).should('have.text', text)
}
export function ardisIdAssertion(ardisID) {
	cy.get(ardisLocators.ardisId).should('be.visible')
	waiter()
	cy.xpath(ardisLocators.ardisIdText).should('have.text', ardisID)
}
export function pepAssertion(text) {
	cy.xpath(ardisLocators.pep).should('exist')
	listElementsSecond(ardisLocators.pepText, text)
}
export function positionAssertion(text) {
	cy.xpath(ardisLocators.position).should('exist')
	cy.xpath(ardisLocators.positionText).should('have.text', text)
}
export function relatedPeopleSecondAssertion(arr) {
	cy.xpath(ardisLocators.relatedPeople).should('exist')
	listElementsSecond(ardisLocators.relatedpeopleText, arr)
}
export function akaExploreAssertion(array) {
	cy.xpath(ardisLocators.akaExplore).should('exist');
	listElements(ardisLocators.akaExploreText, array)
}
export function ardisIdExploreAssertion(text) {
	cy.xpath(ardisLocators.ardisIdExplore).should('exist')
	cy.xpath(ardisLocators.ardisIdExploreText).should('include.text', text)
}
export function uniExploreAssertion(text) {
	cy.xpath(ardisLocators.uniExplore).should('exist')
	cy.xpath(ardisLocators.uniExploreText).should('include.text', text)
}
export function jurisdictionExploreAssertion(text) {
	cy.xpath(ardisLocators.jurisdictionExplore).should('exist')
	cy.xpath(ardisLocators.jurisdictionExploreText).should('include.text', text)
}
export function statusExploreAssertion() {
	cy.xpath(ardisLocators.statusExplore).should('exist')
	cy.xpath(ardisLocators.statusExploreText).should('include.text', 'Active')
}
export function relateddatesExploreAssertion(text) {
	cy.xpath(ardisLocators.relatedDatesExplore).should('exist')
	cy.xpath(ardisLocators.relatedDatesExploreText).should('include.text', text)
}
export function positionsExploreAssertion(text) {
	cy.xpath(ardisLocators.positionsExplore).should('exist')
	cy.xpath(ardisLocators.positionsExploreText).should('include.text', text)
}
export function alertsExploreAssertion(text) {
	cy.xpath(ardisLocators.alertsExplore).should('exist')
	cy.xpath(ardisLocators.alertsExploreText).should('include.text', text)
}
export function graphExploreAssertion() {
	cy.xpath(ardisLocators.graph).should('be.visible')
}
export function politicalProfileExploreAssertion() {
	cy.xpath(ardisLocators.politicalProfileCard).should('have.length', 38)
}
export function businessProfileExploreAssertion() {
	cy.xpath(businessProfileCard).should('have.length', 30)
}
export function judicialProfileExploreAssertion() {
	cy.xpath(ardisLocators.judicalProfileCard).should('not.exist')
}
export function clickHereNewsSearchAssertion() {
	cy.xpath(ardisLocators.clickHere).should('exist')
}
export function newsSearchCountAssertion() {
	cy.xpath(ardisLocators.newsSearchCard, { timeout: 20000 }).should('have.length', 20)
}
export function newsSearchAssertion(searchInput, dropDown, waitTime) {
	cy.wait(waitTime);
	cy.get(searchInput).click();
	cy.wait(waitTime);
	cy.get(dropDown).should('be.visible')
}
export function akaRussianAssertion() {
	cy.xpath(aka_Russian).should('exist')
	cy.xpath(akaResults_Russian).its("length").should('be.gte', 142)
}
export function ardisIdRussianAssertion(text) {
	cy.xpath(ardisLocators.ardisIdExplore).should('be.visible')
	cy.xpath(ardisLocators.ardisIdExploreText).should('include.text', text)
}
export function legalTypesAssertion(text) {
	cy.xpath(ardisRussianLocators.legalTypes).should('be.visible')
	cy.xpath(ardisRussianLocators.legalTypesResult).should('include.text', text)
}
export function possibleAddressesAssertion(text) {
	cy.xpath(ardisRussianLocators.possibleAddresses).should('be.visible')
	cy.xpath(ardisRussianLocators.possibleAddressesResult).should('include.text', text)
}
export function uniRussianAssertion(text) {
	cy.xpath(ardisRussianLocators.uni_Russian).should('be.visible')
	cy.xpath(ardisRussianLocators.uniResult_Russian).should('include.text', text)
}
export function jurisdictionRussianAssertion(text) {
	cy.xpath(ardisRussianLocators.jurisdiction_Russian).should('be.visible')
	cy.xpath(ardisRussianLocators.jurisdictionResult_Russian).should('include.text', text)
}
export function statusRussianAssertion() {
	cy.xpath(ardisRussianLocators.status_Russian).should('be.visible')
	cy.xpath(ardisRussianLocators.statusResult_Russian).should('include.text', "Active")
}
export function relatedDatesRussianAssertion(text) {
	cy.xpath(ardisRussianLocators.relatedDates_Russian).should('be.visible')
	cy.xpath(ardisRussianLocators.relatedDatesResult_Russian).should('include.text', text)
}
export function sanctionsRussianAssertion(text) {
	cy.xpath(ardisRussianLocators.sanctions_Russian).should('be.visible')
	cy.xpath(ardisRussianLocators.sanctionsResult_Russian).should('include.text', text)
}
export function alertsRussianAssertion(text) {
	cy.xpath(ardisRussianLocators.alerts_Russian).should('be.visible')
	cy.xpath(ardisRussianLocators.alertsResult_Russian).should('include.text', text)
}
export function remarkRussianAssertion() {
	cy.xpath(remark_Russian).should('exist')
	cy.xpath(remarkResult_Russian).its("length").should('be.gte', 1)
}
export function alertNataliyaAssertion() {
	cy.xpath(ardisNatalyaHelpers.alertNotExisting).should('not.exist')
}
export function alertSystematicAssertion(locator,text){
	cy.xpath(locator).should('include.text', text)
}