describe('fieldOfStudy', function () {
    beforeEach(function () {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.getCookies().should('be.empty');
        cy.fixture('/loginAdmin.json').then(data => {
            cy.Login(data);

        })
    });

    it('CreateNewFieldOfStudy', function () {

        cy.visit('AdminPanel');
        cy.get('[href="/AdminPanel/FieldOfStudies/Index"]').click();
        cy.contains('Dodaj kierunek studiów ').click();
        cy.get('#Name').type('Botanika')
        cy.contains('Zapisz').click();
        cy.get('.body-content').contains('Botanika').should('be.visible');


    });


    it('EditFieldOfStudy', function () {

        cy.visit('AdminPanel');
        cy.get('[href="/AdminPanel/FieldOfStudies/Index"]').click();
        cy.contains('Dodaj kierunek studiów ').click();
        cy.get('#Name').type('Kulturoznawstwo');
        cy.contains('Zapisz').click();
        cy.get('.body-content').contains('Kulturoznawstwo').should('be.visible');

        cy.contains('Kulturoznawstwo')
            .parent('tr')
            .within(() => {
                cy.get('.btn-default')
                    .click();
                  
            })
            cy.get('#Name').type('_Edytowane');
            cy.get('form > :nth-child(3) > .btn').click();
            cy.get('.body-content').contains('Kulturoznawstwo_Edytowane').should('be.visible')

    });





    it('DeleteFieldOfStudy', function () {

        cy.visit('AdminPanel');
        cy.get('[href="/AdminPanel/FieldOfStudies/Index"]').click();
        cy.contains('Dodaj kierunek studiów ').click();
        cy.get('#Name').type('Mechanika');
        cy.contains('Zapisz').click();
        cy.contains('Mechanika').should('be.visible')
            .parent('tr')
            .within(() => {
                cy.get('.btn-danger')
                    .click();
            })
            cy.get('form > .btn').click();
            cy.get('.body-content').should('not.have.value', 'Mechanika')
    });
});

