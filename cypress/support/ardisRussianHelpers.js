const { xpathFunctionRussian, xpathFunctionExtendedRussian } = require("./ardisFunctions");

module.exports = {
    tin_Russian: "1027739001993",
    searchResult_Russian: "Almaz-antey",
    aka_Russian: xpathFunctionRussian("AKA"),
    akaResults_Russian: '(//div[@class="col-xs-12 key-map"])[1]//span[@class="list-value"]',
    legalTypes: "//div[contains(text(),'Legal Types')]",
    legalTypesResult: xpathFunctionExtendedRussian("Legal Types"),
    ardisIdText: "L40001058906551611719597712",
    legalTypesText: "Акционерное общество (ru),Joint Stock Company (en)",
    possibleAddresses: "//div[contains(text(),'Possible Addresses')]",
    possibleAddressesResult: xpathFunctionExtendedRussian("Possible Addresses"),
    possibleAddressesText: 'Ul. Vereyskaya 41, G. Moskva 121471, Rosssiya,D41 121471 Moscow Russia,D.41, G. Moskva 121471, Rosssiya,D41 G Moskva 121471 Rosssiya,Vereyskaya Str 41 121471 Moscow Russia,Vereyskaya Str. 41, 121471 Moscow, Russia,D41, 121471 Moscow, Russia,Ul Vereyskaya 41 G Moskva 121471 Rosssiya,16-80, Leningradsky Prospect, Moscow, Russia, 125190,41 ul.Vereiskaya, Moscow, RUSSIAN FEDERATION, 121471, RU,41 ul. Vereiskaya, Moscow, 121471,41 ul.Vereiskaya, Moscou 121471,41 ul.Vereiskaya, 121471,41 ul.Vereiskaya, Moscow 121471, Russian Federation; 16-80, Leningradsky Prospect, Moscow, 125190, Russian Federation,16-80, Leningradsky Prospect, Moscow, 125190,41 ul. Vereiskaya, Moscow, Russia, 121471',
    uni_Russian: xpathFunctionRussian("Unique"),
    uniResult_Russian: xpathFunctionExtendedRussian("Unique"),
    uniText_Russian: "National ID: 1027739001993,TIN: 7731084175",
    jurisdiction_Russian: xpathFunctionRussian("Jurisdiction"),
    jurisdictionResult_Russian: xpathFunctionExtendedRussian("Jurisdiction"),
    jurisdictionText_Russian: "Russia (possible citizenship, professional or business exposure, related)",
    status_Russian: xpathFunctionRussian("Status"),
    statusResult_Russian: xpathFunctionExtendedRussian("Status"),
    relatedDates_Russian: xpathFunctionRussian("Related"),
    relatedDatesResult_Russian:xpathFunctionExtendedRussian("Related"),
    relatedDatesText_Russian: "Registration Date: 16/JAN/1995,CAATSA 241 (a)(1) list Inclusion Date: 27/OCT/2017,Date of update: 28/MAY/2014, 25/MAY/2015, 25/MAY/2016, 30/APR/2013,Actual date: 31/DEC/2013, 31/DEC/2014, 31/DEC/2015, 31/DEC/2012,UK Sanction Effective Date: 31/JUL/2014,UK Sanctions List Date Designated: 31/DEC/2020,Swiss Sanction Effective Date: 25/MAR/2022, 27/AUG/2014, 12/NOV/2014, 04/MAR/2022,Listing Date: 17/SEP/2014, 22/JUL/2014",
    sanctions_Russian: "(//*[contains(text(),'Sanctions')])[2]",
    sanctionsResult_Russian: xpathFunctionExtendedRussian("Sanctions"),
    sanctionsText_Russian: "Data suggests there is sanction related problematic. For details please check the Sanctions Section of this Report.",
    alerts_Russian: xpathFunctionRussian("Alerts"),
    alertsResult_Russian:xpathFunctionExtendedRussian("Alerts"),
    alertsText_Russian: "appears on Canadian Autonomous Sanctions List,Appears on the list of CAATSA Section 231(e) Defense and Intelligence Sectors of the Government of the Russian Federation,is affected by asset freezing measures in force on French territory, in application of national, European and international (UN) provisions.,is subject to targeted financial sanctions under Australian sanctions law,Appears on Entity List, US Department of Commerce, Bureau of Industry and Security,is listed as a systemically important entity,Related to a PEP,Related to a state owned entity,Related to a listed entity through a third party",
    remark_Russian: xpathFunctionRussian("Remark"),
    remarkResult_Russian: xpathFunctionExtendedRussian("Remark"),



}