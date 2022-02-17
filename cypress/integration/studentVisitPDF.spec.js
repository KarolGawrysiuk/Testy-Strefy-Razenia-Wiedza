describe('studentVisitPDF', function () {
    beforeEach(function () {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.getCookies().should('be.empty');
        cy.fixture('/loginStud.json').then(data => {
            cy.Login(data);

        })

    });


    it('VisitPDF', function () {

        cy.visit('MyCourses');
        cy.contains('Technologie Programistyczne Systemy Internetowe').should('be.visible').click();
        cy.fixture('/laboratories.json').then(data => {

            for (let i = 0; i < data.length; i++) {
                cy.get('.body-content').contains(data[i]).should('be.visible');
             }

        });

        cy.get('[href="/Course/ViewFile?fileId=5933&typeId=0"] > img').should('be.visible').click();
    });


});