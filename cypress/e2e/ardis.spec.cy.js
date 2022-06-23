import { beforeEach } from "mocha"
import { arr, array, arrayExploreAka } from "../support/ardisAssertionData";
import { addressAssertion, akaAssertion, akaExploreAssertion, alertsAssertion, alertsExploreAssertion, ardisIdAssertion, ardisIdExploreAssertion, avatarAssertion, biographyAssertion, businessProfileExploreAssertion, dateOfBirthAssertion, graphExploreAssertion, judicialProfileExploreAssertion, jurisdictionAssertion, jurisdictionExploreAssertion, leftNewsSearchAssertion, nationalIdAssertion, newsSearchCountAssertion, pepAssertion, politicalProfileExploreAssertion, positionAssertion, positionsExploreAssertion, relateddatesExploreAssertion, relatedOrgAssertion, relatedPeopleAssertion, relatedPeopleSecondAssertion, searchResultAssertion, statusExploreAssertion, tinAssertion, tinExploreAssertion, uniExploreAssertion, newsSearchAssertion } from "../support/ardisAssertions";
import { clickMore, login, navigate, navigateToBusinessProfile, navigateToExplore, navigateToJudicial, navigateToNewsSearchExplore, navigateToPoliticalProfile, navigateToRelationships, searchWithTIN } from "../support/ardisFunctions";
import { dropDownMenu, left, right } from "../support/ardisLocators";
import { alertsExplore_Miguel, alert_Miguel, ardisIdExplore_Miguel, ardisId_Miguel, bio_Miguel, dateOfBirth_Miguel, jurisdictionExplore_Miguel, jurisdiction_Miguel, positionsExplore_Miguel, position_Miguel, relatedDatesExplore_Miguel, searchResult_Miguel, text_Miguel, tin_Miguel, uniExplore_Miguel } from "../support/ardisMiguelHelpers";
import { searchResult_Ziad, text_Ziad, dateOfBirth_Ziad, bio_Ziad, relatedOrg_Ziad, relatedPeople_Ziad, jurisdiction_Ziad, tin_Ziad, address_Ziad, tinSecond_Ziad } from "../support/ardisZiadHelpers"

describe('News search test', () => {
  beforeEach(() => {
    navigate();
    login()

  });
  it('C214: Ziad Khalaf Al-manasar', () => {
    searchWithTIN(tin_Ziad)
    searchResultAssertion(searchResult_Ziad)
    akaAssertion(array)
    alertsAssertion(text_Ziad)
    avatarAssertion()
    dateOfBirthAssertion(dateOfBirth_Ziad)
    tinAssertion(tinSecond_Ziad)
    nationalIdAssertion()
    biographyAssertion(bio_Ziad)
    relatedOrgAssertion(relatedOrg_Ziad)
    relatedPeopleAssertion(relatedPeople_Ziad)
    addressAssertion(address_Ziad)
    jurisdictionAssertion(jurisdiction_Ziad)


  })
  it.only('C215: Miguel Juan Sebastian', () => {
    searchWithTIN(tin_Miguel)
    searchResultAssertion(searchResult_Miguel)
    //ardisIdAssertion(ardisId_Miguel)
    dateOfBirthAssertion(dateOfBirth_Miguel)
    biographyAssertion(bio_Miguel)
    akaAssertion(arr)
    //pepAssertion(arrayPep)
    alertsAssertion(alert_Miguel)
    jurisdictionAssertion(jurisdiction_Miguel)
    positionAssertion(position_Miguel)
    //relatedPeopleSecondAssertion(arrayRelPeople)
    //relatedOrgAssertion(text_Miguel)
    clickMore()
    navigateToExplore()
    akaExploreAssertion(arrayExploreAka)
    ardisIdExploreAssertion(ardisIdExplore_Miguel)
    uniExploreAssertion(uniExplore_Miguel)
    jurisdictionExploreAssertion(jurisdictionExplore_Miguel)
    statusExploreAssertion()
    relateddatesExploreAssertion(relatedDatesExplore_Miguel)
    positionsExploreAssertion(positionsExplore_Miguel)
    alertsExploreAssertion(alertsExplore_Miguel)
    navigateToPoliticalProfile()
    politicalProfileExploreAssertion()
    navigateToBusinessProfile()
    businessProfileExploreAssertion()
    navigateToJudicial()
    judicialProfileExploreAssertion()
    navigateToRelationships()
    graphExploreAssertion()
    navigateToNewsSearchExplore()
    newsSearchCountAssertion()
    newsSearchAssertion(left, dropDownMenu, 1000);
    newsSearchAssertion(right, dropDownMenu, 1000)


  })
})
