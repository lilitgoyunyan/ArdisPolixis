export function interceptAs(path, alias){
    cy.intercept(path).as(alias)
}
export function waitUntil(endpoint, time){
    cy.wait(endpoint, time)
    .then(({response}) => {
      expect(response.body.status).to.eq('DONE')
    })
}
export function resultsAssertion(endpoint, statementOne, statementTwo ){
    cy.get(endpoint)
      .then(({response}) => {
        expect(response.body.results[0].pieData[0].name).to.eq(statementOne)
        expect(response.body.results[0].pieData[1].name).to.eq(statementTwo)
      })
}
export function exploreEndpointAssertion(endpoint, statementOne){
    cy.get(endpoint)
    .then(({response}) => {
      expect(response.body.analytics.judicial.view).to.eq(statementOne)
    })
}