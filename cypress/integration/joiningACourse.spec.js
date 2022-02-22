describe('joiningACourse', function () {
    beforeEach(function () {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.getCookies().should('be.empty');
        cy.fixture('/loginStud.json').then(data => {
            cy.Login(data);
        });
    })

    it('joiningACourse', function () {
        cy.fixture('/courseDetails.json').then(data => {
            cy.visit('Course');
            cy.get('[href="/Course?courseVisible=all"]').should('be.visible').click();
            cy.contains('KursTestowy').should('be.visible').click();
            cy.get('h2').contains('KursTestowy').should('be.visible');
            //cy.get('.btn-success').click();
            cy.get('.body-content').contains('Oczekiwanie na akceptację').should('be.visible')

        });

        cy.contains('Wyloguj').click();

        cy.fixture('/loginTeacher.json').then(data => {
            cy.Login(data);

            cy.get('.desktop-notification > .btn').click();
            //cy.get('a > .panel > .panel-body').should('be.visible').contains('Szymon Pyzio');
    });

});
});