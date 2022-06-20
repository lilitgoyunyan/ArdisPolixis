import { beforeEach } from "mocha"
import { addressAssertion, addressExistsAssertion, akaAssertion, alertsAssertion, avatarAssertion, biographyAssertion,  dateOfBirthAssertion,jurisdictionAssertion, jurisdictionExistsAssertion, nationalIdAssertion, relatedOrgAssertion,  relatedPeopleAssertion,  searchResultAssertion, tinAssertion} from "../support/ardisAssertions";
import { login, navigate, searchWithTIN, waiter } from "../support/ardisFunctions";

describe('News search test', () => {
  beforeEach(() => {
		navigate();
		
	});
  it('passes', () => {
      login()
      searchWithTIN()
      searchResultAssertion()
      akaAssertion()
      alertsAssertion()
      avatarAssertion()
      dateOfBirthAssertion()
      tinAssertion()
      nationalIdAssertion()
      biographyAssertion()
      relatedOrgAssertion()
      relatedPeopleAssertion()
      addressAssertion()
      jurisdictionAssertion()
     
      
  })
})