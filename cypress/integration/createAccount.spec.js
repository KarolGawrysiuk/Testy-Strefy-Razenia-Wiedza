describe('createAccount', function () {
    beforeEach(function () {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.getCookies().should('be.empty');

    })


it('Check Labels', function () {
    cy.visit('Account/Register');
    cy.get('h2').contains('Rejestracja.').should('be.visible');
    cy.get('h4').contains('Utwórz nowe konto.').should('be.visible');
    cy.get(':nth-child(3) > .col-md-2').contains('Email').should('be.visible');
    cy.get(':nth-child(4) > .col-md-2').contains('Imię').should('be.visible');
    cy.get(':nth-child(5) > .col-md-2').contains('Nazwisko').should('be.visible');
    cy.get(':nth-child(6) > .col-md-2').contains('Hasło').should('be.visible');
    cy.get(':nth-child(7) > .col-md-2').contains('Powtórz hasło').should('be.visible');
    cy.get(':nth-child(8) > .col-md-2').contains('Typ studiów').should('be.visible');
    cy.get(':nth-child(9) > .col-md-2').contains('Stopień studiów').should('be.visible');
    cy.get(':nth-child(10) > .col-md-2').contains('Semestr').should('be.visible');
    cy.get(':nth-child(11) > .col-md-2').contains('Kierunek studiów').should('be.visible');


//cy.fixture('/create.account.json').then()
});


it('Check Inputs', function () {
    cy.get('#Email').should('be.visible').should('be.empty');
    cy.get('#Name').should('be.visible').should('be.empty');
    cy.get('#Surname').should('be.visible').should('be.empty');
    cy.get('#Password').should('be.visible').should('be.empty');
    cy.get('#ConfirmPassword').should('be.visible').should('be.empty');
    cy.get('#StudiesTypeId').should('be.visible').should('not.be.empty');
    cy.get('#StudiesLevelId').should('be.visible').should('not.be.empty');

    cy.get('#SemesterId').should('be.visible').should('not.be.empty');

    cy.get('#FieldOfStudyIds').should('be.visible').should('not.be.empty');


});

it('CreatedAccount', function(){
    cy.fixture('/create.account.json').then(data => {
        cy.get('#Email').type(data.email);
        cy.get('#Name').type(data.name);
        cy.get('#Surname').type(data.surname);
        cy.get('#Password').type(data.password);
        cy.get('#ConfirmPassword').type(data.confirmPassword);
        cy.get('#StudiesTypeId').type(data.studiesTypeId);
        cy.get('#StudiesLevelId').select(data.studiesLevelId)
        cy.get('#SemesterId').select(data.semesterId);
        cy.get('#FieldOfStudyIds').select(data.fieldOfStudyIds);
        cy.get('.btn').contains('Zarejestruj').should('be.visible')
        //.click()
        ;

    }
)})

it('test require fields', function() {
    cy.fixture('');
})
});