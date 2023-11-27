import application_PO from "../../../../support/pageObjects/outpostChess-app/application_PO";

/// <reference types="cypress" />

//const { makeArray } = require("cypress/types/jquery");

//Tournament feature test 
describe('apply for a tournament', () => {
    before(function () {
        cy.fixture('example').then(function (data) {
            globalThis.data = data;

        });
    });
    beforeEach(function () {
        const app_PO = new application_PO();
        app_PO.visitSignUp();
      // app_PO.go_to_Inbox();
    })
    it('Should submit a successful tournament application', () => {
        //LogIn feature
      //  cy.visit('https://app.outpostchess.com/#/login');
        cy.get(':nth-child(1) > .mailin').type(data.email);
        cy.get('#password-padd > .mailin').type(data.pass);
        cy.get('#butt1 > .text-join').click();
        //Successful Log-in 
        cy.url('https://app.outpostchess.com').should('include', '/home-page');
        //Find Thournament 
        //  cy.get(':nth-child(2) > .home-right > .event-commercial').should('include.text','thournament');
        //Enter the inner tournament     
        cy.get('div:nth-child(1) [class*="tour-data-btn"]').eq(0).click();
        //Check if the thournament free (becouse i've got no money) 


        cy.get('.flexend > .confirm-button2-cream').click();
        //Confirm presonal data 
        cy.get('.left > .block-border-top').should('be.visible');
        cy.get('.left > .block-border-top').should('have.text', ' FIDE ID ');
    })

});
