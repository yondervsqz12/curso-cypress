import { LoginMethods } from "./pages/login/login.methods";

describe('template spec', () => {
  it('passes', () => {

    const username = "random01";
    const password = "random01";

    cy.visit('https://demoblaze.com/')
    cy.get('a[data-target="#logInModal"]').click();
    LoginMethods.login(username, password);
    cy.get('a#nameofuser').should('contain.text', username);
    cy.wait(3000);

  })
})