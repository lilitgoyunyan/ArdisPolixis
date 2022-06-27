import { beforeEach } from "mocha"
import { exploreEndpointAssertion, interceptAs, resultsAssertion, waitUntil } from "../support/apiFunctions";
import { arr, array, arrayExploreAka } from "../support/ardisAssertionData";
import { addressAssertion, akaAssertion, akaExploreAssertion, alertsAssertion, alertsExploreAssertion, ardisIdAssertion, ardisIdExploreAssertion, avatarAssertion, biographyAssertion, businessProfileExploreAssertion, dateOfBirthAssertion, graphExploreAssertion, judicialProfileExploreAssertion, jurisdictionAssertion, jurisdictionExploreAssertion, leftNewsSearchAssertion, nationalIdAssertion, newsSearchCountAssertion, pepAssertion, politicalProfileExploreAssertion, positionAssertion, positionsExploreAssertion, relateddatesExploreAssertion, relatedOrgAssertion, relatedPeopleAssertion, relatedPeopleSecondAssertion, searchResultAssertion, statusExploreAssertion, tinAssertion, tinExploreAssertion, uniExploreAssertion, newsSearchAssertion, akaRussianAssertion, ardisIdRussianAssertion, legalTypesAssertion, possibleAddressesAssertion, uniRussianAssertion, jurisdictionRussianAssertion, statusRussianAssertion, relatedDatesRussianAssertion, sanctionsRussianAssertion, alertsRussianAssertion, remarkRussianAssertion, alertNataliyaAssertion, alertPavelAssertion, alertSystematicAssertion } from "../support/ardisAssertions";
import { clickMore, exploreFunction, login, navigate, navigateToBusinessProfile, navigateToExplore, navigateToJudicial, navigateToNewsSearchExplore, navigateToPoliticalProfile, navigateToRelationships, searchWithTIN, waiter, chooseResult, clickExploreButton, advancedSearchToDefaultFunction, searchWithName, helperClear } from "../support/ardisFunctions";
import { advancedSearchOptionsButton, alertPavelText, clearButton, dropDownMenu, electroMech, electroMechName, expectedAlertPavelText, expectedAlertText, inputSearchField, left, natalyaName, pavelName, right } from "../support/ardisLocators";
import { alertsExplore_Miguel, alert_Miguel, ardisIdExplore_Miguel, ardisId_Miguel, bio_Miguel, dateOfBirth_Miguel, jurisdictionExplore_Miguel, jurisdiction_Miguel, positionsExplore_Miguel, position_Miguel, relatedDatesExplore_Miguel, searchResult_Miguel, text_Miguel, tin_Miguel, uniExplore_Miguel } from "../support/ardisMiguelHelpers";
import ardisNatalyaHelpers from "../support/ardisNatalyaHelpers";
import ardisPavelHelpers from "../support/ardisPavelHelpers";
import { alertsText_Russian, ardisIdText, jurisdictionText_Russian, legalTypesText, possibleAddressesText, relatedDatesText_Russian, sanctionsText_Russian, searchResult_Russian, tin_Russian, uniText_Russian } from "../support/ardisRussianHelpers";
import { searchResult_Ziad, text_Ziad, dateOfBirth_Ziad, bio_Ziad, relatedOrg_Ziad, relatedPeople_Ziad, jurisdiction_Ziad, tin_Ziad, address_Ziad, tinSecond_Ziad } from "../support/ardisZiadHelpers"
import electroMechHelpers from "../support/electroMechHelpers";

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
  it('C215: Miguel Juan Sebastian', () => {
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
    exploreFunction()
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
  it('C202:', () => {
    searchWithTIN(tin_Russian)
    searchResultAssertion(searchResult_Russian)
    chooseResult();
    waiter()
    clickExploreButton()
    akaRussianAssertion()
    ardisIdRussianAssertion(ardisIdText)
    legalTypesAssertion(legalTypesText)
    possibleAddressesAssertion(possibleAddressesText)
    uniRussianAssertion(uniText_Russian)
    jurisdictionRussianAssertion(jurisdictionText_Russian)
    statusRussianAssertion()
    relatedDatesRussianAssertion(relatedDatesText_Russian)
    sanctionsRussianAssertion(sanctionsText_Russian)
    alertsRussianAssertion(alertsText_Russian)
    remarkRussianAssertion()

  })
  it('C329: Systemic Entities Auto-Generated Alerts', () => {
    searchWithName(ardisNatalyaHelpers.natalyaName)
    alertNataliyaAssertion()
  })

  it.only('C328: Systemic Entities Auto-Generated Alerts', () => {
    searchWithName(ardisPavelHelpers.pavelName)
    waiter()
    alertSystematicAssertion(ardisPavelHelpers.alertPavelText, expectedAlertText)
    helperClear(inputSearchField)
    searchWithName(electroMechHelpers.electroMechName)
    waiter()
    alertSystematicAssertion(electroMechHelpers.electroMech, expectedAlertText)
  })



  it('C319', () => {
    searchWithName("Mohammad Saif Ahmad Alghurair")
    interceptAs('/api/v2/core/search',  'searchEndpoint')
    waitUntil('@searchEndpoint', {timeout:20000})
    resultsAssertion('@searchEndpoint', 'INFO', 'PEP')
    clickMore()
    clickExploreButton()
    interceptAs('/api/v2/core/explore', 'exploreEndpoint')
    waitUntil('@exploreEndpoint', {timeout:20000})
    exploreEndpointAssertion('@exploreEndpoint','ELASTIC')
  })




})
