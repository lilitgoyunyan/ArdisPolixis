import { beforeEach } from "mocha"
import { searchResultCountAssertion } from "../support/ardisAssertions";
import { login, navigate, search } from "../support/ardisFunctions";

describe('News search test', () => {
  beforeEach(() => {
		navigate();
		
	});
  it('passes', () => {
      login()
      search()
      searchResultCountAssertion()
  })
})