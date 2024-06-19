// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
// Execute tests with tag login
// npx cypress run --env TAGS='@login'​ o TAGS='@login and @smoke' o TAGS='@login not @smoke'
//
//  npx allure serve allure-results/
//  rm -r folder_name/
//  npx cypress open -b chrome --e2e
//  npx cypress run --e2e -b chrome -s .\cypress\e2e\practice\login.cy.js
//  npx cypress run --e2e -b chrome -s cypress/e2e/practice/login.cy.js
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })