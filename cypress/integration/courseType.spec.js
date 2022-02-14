describe('CourseType', function () {
    beforeEach(function () {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.getCookies().should('be.empty');
        cy.fixture('/loginAdmin.json').then(data => {
            cy.Login(data);

        })
    });


    it('CreateCourseType', function () {
        cy.fixture('/addCourseType.json').then(data => {
            cy.visit('CourseType');
            cy.get('.pull-left > .btn').click();
            cy.get('#Name').type(data.name);
            cy.get('#FieldOfStudyId').type(data.fieldOfStudies);
            cy.get('#SemestrNumber').type(data.semestr);
            cy.get('.col-md-offset-2 > .btn').click();
        });

    });
    it('EditCourseType', function () {
        cy.fixture('/addCourseType.json').then(data => {
            cy.visit('CourseType');
            cy.get('.pull-left > .btn').click();
            cy.get('#Name').type(data.name + ' Edytowany');
            cy.get('#FieldOfStudyId').type(data.fieldOfStudies);
            cy.get('#SemestrNumber').type(data.semestr);
            cy.get('.col-md-offset-2 > .btn').click();
        });

    });


    it('DeleteCourseType', function () {
        cy.visit('CourseType');
        cy.contains('Edytowany')
            .parent('tr')
            .within(() => {
                cy.get('.btn-danger').click();
            })
        cy.get('.btn-danger').click();
    });
    it('RestoreCourseType', function () {
        cy.visit('CourseType');
        cy.contains('Edytowany')
            .parent('tr')
            .within(() => {
                cy.get('.btn-success').click();
            })
        cy.get('.btn-success').click();
    });


});
