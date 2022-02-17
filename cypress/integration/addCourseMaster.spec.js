describe('studentVisitPDF', function () {
    beforeEach(function () {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.getCookies().should('be.empty');
        cy.fixture('/loginTeacher.json').then(data => {
            cy.Login(data);

        })

    });

    it('addCourseMaster', function () {
        cy.visit('/CourseManagement/Groups/274');
        cy.contains('Dodaj prowadzącego').should('be.visible').click();
        cy.get('select').select('Krzysztof Kokoszkiewicz');
        cy.get('.btn-success').click();
        cy.get('.body-content').contains('Krzysztof Kokoszkiewicz').should('be.visible');






        cy.visit('/CourseManagement/Groups/274');
        cy.contains('Dodaj grupę').should('be.visible').click();
        cy.get('#Name').type('Grupa Indywidualna')
        cy.contains('Krzysztof Kokoszkiewicz')
            .parent('.form-group')
            .within(() => {
                cy.get('[type="checkbox"]').check();
                    

            });
            cy.get('.btn-success').click();
            cy.get('.body-content').contains('Grupa Indywidualna').should('be.visible');
    });
});