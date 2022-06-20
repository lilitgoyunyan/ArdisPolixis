import { array,listElementsFunction } from "./ardisFunctions";
import ardisLocators from "./ardisLocators";
export function searchResultCountAssertion(){
	cy.get(ardisLocators.resultCount).should('include.text', '1');
}
export function searchResultNameExistsAssertion(){
	cy.xpath(ardisLocators.searchResultName).should('exist');
}
export function searchResultNameAssertion(){
	cy.xpath(ardisLocators.searchResultName).should('include.text', 'Ziad Khalaf Al-manaser');
}

export function akaExistsAssertion(){
	cy.xpath(ardisLocators.aka).should('exist');
}

export function akaNamesListAsserion(){
	listElementsFunction(ardisLocators.akaNamesList, array)
}

export function alertsExistsAssertion(){
	cy.xpath(ardisLocators.alerts).should('exist');
}

export function alertsListAsserion(){
	cy.xpath(ardisLocators.alertsList).should('include.text', ardisLocators.text)
}
export function avatarAssertion(){
	cy.get(ardisLocators.avatar).should('exist')
}
export function dateOfBirthExistsAssertion(){
	cy.xpath(ardisLocators.date).should('exist')
}
export function dateOfBirthAssertion(){
	cy.xpath(ardisLocators.dateOfBirth).should('include.text', '12/DEC/1965')
}


export function tinExistsAssertion(){
	cy.xpath(ardisLocators.tin).should('exist')
}
export function tinAssertion(){
	cy.xpath(ardisLocators.tinText).should('include.text', '770303428416 (Russia)')
}

export function nationalIdExistsAssertion(){
	cy.xpath(ardisLocators.nationalId).should('exist')
}
export function nationalIdAssertion(){
	cy.xpath(ardisLocators.nationalIdText).should('include.text', '9651000176 (Jordan)')
}
export function biographyExistsAssertion(){
	cy.xpath(ardisLocators.biography).should('exist')
}

export function biographyAssertion(){
	cy.xpath(ardisLocators.biographyText).should('contain', "Ziyad  Khalaf Mohammed Manaseer is a Jordanian-born Russian entrepreneur. Manasirs' family was featured in Forbes Arabia's Wealth list of 2009.  Ziyad  Manaseer was ranked #84 in the List of the World's 100 Richest Arabs 2015 by Forbes Middle East. He dropped from the list in 2016.")
}

export function relatedOrgExistsAssertion(){
	cy.xpath(ardisLocators.relatedOrg).should('exist')
}

export function relatedOrgAssertion(){
	cy.xpath(ardisLocators.relatedOrgText).should('have.text', "GAZPROMBANKSTROYGAZCONSULTING LLCALBNK ALARBIARAB NATIONAL BANKJORDAN INSURANCEUNITED IRON AND STEEL MANUFACTURING CO P L CJORDAN STEELARAB BANK UAEARAB TUNISIANZARA INVESTMENT HOLDINGetc.")
}
export function relatedPeopleExistsAssertion(){
	cy.xpath(ardisLocators.relatedPeople).should('exist')
}
export function relatedPeopleAssertion(){
	cy.xpath(ardisLocators.relatedpeopleText).should('have.text','Sabih Tahir Al MasriKhalid Anis IraniMohammed Khalaf Mohammed Al-manaserManjad Munir Reza ShoktiaanAhmad Khalaf Mohammed Al-manaserRuslan Sulimovich BaysarovBassem Ibrahim AwadallahA Yeshah Alaa Arif BataynehAlaa Aref BataynehArif Alaa Bataynehetc.')
}
export function addressExistsAssertion(){
	cy.xpath(ardisLocators.address).should('exist')
}
export function addressAssertion(){
	cy.xpath(ardisLocators.addressText).should('contain',"pereulok kapranova 4  apt. 9  moscow russian federationKapranova Lane 4-9, 123242, MOSCOU, U.R.S.S.")
}

export function jurisdictionExistsAssertion(){
	cy.xpath(ardisLocators.jurisdiction).should('exist')
}
export function jurisdictionAssertion(){
	cy.xpath(ardisLocators.jurisdictionText).should('have.text','JordanRussiaFrance')
}