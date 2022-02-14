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
        cy.fixture('/addCourseType.json').then(data => {
            cy.visit('Course');
            cy.get('.pull-left > .btn').click();
            // cy.get('#Name').type(data.name);
            // cy.get('#FieldOfStudyId').type(data.fieldOfStudies);
            // cy.get('#SemestrNumber').type(data.semestr);
            //cy.get('.col-md-offset-2 > .btn').click();
        });

    });
});
