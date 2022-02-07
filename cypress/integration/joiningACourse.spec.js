describe('joiningACourse', function () {
    beforeEach(function () {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.getCookies().should('be.empty');
        cy.fixture('/login.json').then(data => {
            cy.Login(data);
        });
    })
    
    it('joiningACourse', function () {
        cy.fixture('/courseDetails.json').then(data => {
        cy.visit('Course');
        cy.get('[href="/Course?courseVisible=all"]').should('be.visible').click();
        cy.get(':nth-child(1) > :nth-child(1) > .table-responsive > .table > tbody > :nth-child(2) > td > a').should('be.visible').click();
        cy.get('h2').contains('Laboratorium programowania').should('be.visible');
        cy.get('.body-content').within(($list) => {
            cy.get('nth-.dl-horizontal > :nth-child(1)').eq(1).contains('Name')

        })

    })
        });
    
});