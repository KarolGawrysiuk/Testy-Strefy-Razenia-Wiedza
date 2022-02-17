describe('CourseType', function () {
    beforeEach(function () {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.getCookies().should('be.empty');
        cy.fixture('/loginTeacher.json').then(data => {
            cy.Login(data);

        })
    });

    it('CreateCourse', function () {
        cy.fixture('/addCourse.json').then(data => {
            cy.visit('Course');
            cy.get('.pull-left > .btn').click();
            cy.get('#CourseTypeId').select(data.typeCourse);
            cy.get('#Year').select(data.year);
            cy.get('#StudiesTypeId').select(data.studiesTypeId);
            cy.get('#StudiesLevelId').select(data.studiesLevelId);
            cy.get('#SemesterNumber').select(data.semesterNumber);
            cy.get('#MaxPoints').clear().type(data.maxPoints);
            cy.get('#Description').type(data.description);
            cy.contains('Zapisz').click();

            cy.get('.body-content').contains('Rozproszone bazy danych (stacjonarne | Informatyka)').should('be.visible');
        });

    });
});
