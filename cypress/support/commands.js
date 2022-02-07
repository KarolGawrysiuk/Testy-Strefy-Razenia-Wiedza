Cypress.Commands.add('Login', data => {
        cy.visit('Account/Login');
        cy.get('#Login').type(data.email);
        cy.get('#Password').type(data.password);
        cy.get('#RememberMe').check();
        cy.get('.btn').click();
});
