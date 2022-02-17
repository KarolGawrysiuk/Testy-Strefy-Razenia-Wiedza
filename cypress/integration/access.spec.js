describe('access', function () {
    beforeEach(function () {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.getCookies().should('be.empty');
        cy.fixture('/loginStud.json').then(data => {
            cy.Login(data);

        })

    });


    it('Access', function () {

        cy.request({url: '/AdminPanel', failOnStatusCode: false}).its('status').should('equal', 404);
        cy.request({url: '/AdminPanel/Users', failOnStatusCode: false}).its('status').should('equal', 404)
        cy.request({url: '/AdminPanel/Semesters', failOnStatusCode: false}).its('status').should('equal', 404)
        cy.request({url: '/AdminPanel/FieldOfStudies/Index', failOnStatusCode: false}).its('status').should('equal', 404)
        cy.request({url: '/AdminPanel/FieldOfStudies/Edit?id=1', failOnStatusCode: false}).its('status').should('equal', 404)
        cy.request({url: 'AdminPanel/FieldOfStudies/Create', failOnStatusCode: false}).its('status').should('equal', 404)
        cy.request({url: '/CourseType', failOnStatusCode: false}).its('status').should('equal', 404)
        cy.request({url: '/UsersManagement/Edit/826dc40d-5400-4a56-88ba-6ce6fefcbb75', failOnStatusCode: false}).its('status').should('equal', 404)
        cy.request({url: '/CourseType/Edit/16', failOnStatusCode: false}).its('status').should('equal', 404)
        cy.request({url: '/CourseManagement/Points/277', failOnStatusCode: false}).its('status').should('equal', 404)
        cy.request({url: '/CourseManagement/Grades/277', failOnStatusCode: false}).its('status').should('equal', 404)
        cy.request({url: '/CourseManagement/Laboratories/277', failOnStatusCode: false}).its('status').should('equal', 404)
        cy.request({url: '/CourseManagement/Lectures/277', failOnStatusCode: false}).its('status').should('equal', 404)
        cy.request({url: '/CourseManagement/Participants/277', failOnStatusCode: false}).its('status').should('equal', 404)
        cy.request({url: '/CourseManagement/Applications/277', failOnStatusCode: false}).its('status').should('equal', 404)
        cy.request({url: '/CourseManagement/Groups/277', failOnStatusCode: false}).its('status').should('equal', 404)
        cy.request({url: '/CourseManagement/Email/277', failOnStatusCode: false}).its('status').should('equal', 404)
        cy.request({url: '/CourseManagement/Edit/277', failOnStatusCode: false}).its('status').should('equal', 404)
       
      
        

        

    });
});