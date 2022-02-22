describe('StudentAssessment', function () {
    beforeEach(function () {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.getCookies().should('be.empty');
        cy.fixture('/loginTeacher.json').then(data => {
            cy.Login(data);

        })
    });
    it('studentAssessment', function () {

        cy.visit('Course');
        cy.get('[href="/Course/Details/294"').click();
        cy.get('.btn-success').click();
        cy.get('[href="/CourseManagement/Laboratories/294"]').click();
        cy.contains('Dodaj ćwiczenia').click();

        cy.get('#Number')
            .invoke('val')
            .then(number => {
                cy.get('#Name').type('Ćwieczenie');
                cy.get('#Description').type('Opis');
                cy.get('.btn-success').click();
                cy.contains('Punkty').click();
                cy.get(`[title="${number}"] > .pointsDIV`).type(number);
                cy.get('body').click();
            });


        cy.contains('Wyloguj').click();

        cy.fixture('/loginStud.json').then(data => {
            cy.Login(data);
            cy.visit('MyCourses/History');
            cy.get('.body-content').contains('Badania Operacyjne').should('be.visible');;

        });
    });
});