describe('login', function () {
    beforeEach(function () {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.getCookies().should('be.empty');

    })

    it('Login', function () {
        cy.fixture('/login.json').then(data => {
            cy.Login(data);
        });
    });

    it('login attempt with incorrect data', function () {
        cy.fixture('/incorrect.data.json').then(data => {
            cy.Login(data);
            cy.get('.validation-summary-errors > ul').should('be.visible')
            //.contains('Invalid login attempt.');
            .contains('Nieprawidłowa próba logowania.');
        })
    });

});