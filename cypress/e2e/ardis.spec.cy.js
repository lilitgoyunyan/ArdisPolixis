import { beforeEach } from "mocha"
import { addressAssertion, addressExistsAssertion, akaExistsAssertion, akaNamesListAsserion, alertsExistsAssertion, alertsListAsserion, avatarAssertion, biographyAssertion, biographyExistsAssertion, dateOfBirthAssertion, dateOfBirthExistsAssertion, jurisdictionAssertion, jurisdictionExistsAssertion, nationalIdAssertion, nationalIdExistsAssertion, relatedOrgAssertion, relatedOrgExistsAssertion, relatedPeopleAssertion, relatedPeopleExistsAssertion, searchResultCountAssertion, searchResultNameAssertion, searchResultNameExistsAssertion, tinAssertion, tinExistsAssertion } from "../support/ardisAssertions";
import { login, navigate, searchWithTheTIN, waiter } from "../support/ardisFunctions";

describe('News search test', () => {
  beforeEach(() => {
		navigate();
		
	});
  it('passes', () => {
      login()
      searchWithTheTIN()
      searchResultCountAssertion()
      searchResultNameExistsAssertion()
      searchResultNameAssertion()
      akaExistsAssertion()
      akaNamesListAsserion()
      alertsExistsAssertion()
      waiter()
      alertsListAsserion()
      avatarAssertion()
      dateOfBirthExistsAssertion()
      dateOfBirthAssertion()
      tinExistsAssertion()
      tinAssertion()
      nationalIdExistsAssertion()
      nationalIdAssertion()
      biographyExistsAssertion()
      waiter()
      biographyAssertion()
      relatedOrgExistsAssertion()
      waiter()
      relatedOrgAssertion()
      relatedPeopleExistsAssertion()
      relatedPeopleAssertion()
      jurisdictionExistsAssertion()
      jurisdictionAssertion()
      addressExistsAssertion()
      waiter()
      addressAssertion()
      
  })
})