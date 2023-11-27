import application_PO from "../../../../support/pageObjects/outpostChess-app/application_PO";

/// <reference types="cypress"/> 

describe('Interaction with home page features', () => {

    before(function () {
        cy.fixture('example').then(function (data) {
            globalThis.data = data;
        });
    });

    beforeEach(function () {
        const appPo = new application_PO();
        appPo.visitSignUp();
       // appPo.go_to_Inbox();

    })

    it('should see the profile of the new outpost users', () => {
      //  cy.visit('https://app.outpostchess.com/#/login');
        cy.get(':nth-child(1) > .mailin').type(data.email);
        cy.get('#password-padd > .mailin').type(data.pass);
        cy.get('#butt1 > .text-join').click();
        //Successful Log-in 
        cy.url('https://app.outpostchess.com').should('include', '/home-page');
        //Check out new users    
        cy.get('.new-users').eq(3).click();
        //new Outpost users number should equal the amount of users 
        cy.get('.home-user-view .list-rows').each(($el, index, $list) => {
            cy.log("index: " + index + " : " + $el.text())
        })
    });

    it('should check profile of first user with rating up', () => {
       // cy.visit('https://app.outpostchess.com/#/login');
        cy.get(':nth-child(1) > .mailin').type(data.email);
        cy.get('#password-padd > .mailin').type(data.pass);
        cy.get('#butt1 > .text-join').click();
        //Successful Log-in 
        cy.url('https://app.outpostchess.com').should('include', '/home-page');
        cy.get('.check-btn').eq(0).click()
        cy.url('https://app.outpostchess.com').should('include', '/publicprofile');

        

    })
});