/// <reference types="cypress" />
 
describe('log in and create profile', () => {
  

    before(function() {                                       
        cy.fixture('example').then(function(data){           
            globalThis.data = data;                        

        });

    });   

    it('should log in and create a profile', () => {

        cy.visit('https://test.outpostchess.com/#/login');
       cy.url('https://test.outpostchess.com/#/login').should('have.a.property','body');
        cy.get(':nth-child(1) > .mailin').type(data.email);
        cy.get('#password-padd > .mailin').type(data.pass);
        cy.get('#butt1 > .text-join').click();
    //    cy.url().click();
       
      
    });
});