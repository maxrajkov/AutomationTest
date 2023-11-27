import application_PO from "../../../support/pageObjects/outpostChess-app/application_PO";

/// <reference types="cypress" />


describe('Inbox & direct message feature', () => {

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


    it('should display reicent DMs', () => {
        //Log in
        // cy.visit('https://app.outpostchess.com/#/login');
        cy.get(':nth-child(1) > .mailin').type(data.email);
        cy.get('#password-padd > .mailin').type(data.pass);
        cy.get('#butt1 > .text-join').click();
        //Go to inbox 
        cy.get('#message_notification').click();
        cy.wait(3000)
        cy.document().then((doc) => {
            console.log(doc);
            const list = doc.querySelector('[id="center_list "]');
            //(list)
            cy.get('[id="center_list "]').should('include.text', 'Messages');

        })
    });

    it('should display unread messages', () => {
        //Log in
        // cy.visit('https://app.outpostchess.com/#/login');
        cy.get(':nth-child(1) > .mailin').type(data.email);
        cy.get('#password-padd > .mailin').type(data.pass);
        cy.get('#butt1 > .text-join').click();
        //Go to inbox 
        cy.get('div.side-bar [href*="chatroom"]').click({ force: true });
        cy.wait(3000)
        cy.document().then((doc) => {
            console.log(doc);
            const list = doc.querySelector('[id="center_list "]');
        });
        cy.get('a [class*="message-not-seen"]').should('exist');

    });

    it('Should open first unread message', () => {
        //Log in
        //   cy.visit('https://app.outpostchess.com/#/login');
        cy.get(':nth-child(1) > .mailin').type(data.email);
        cy.get('#password-padd > .mailin').type(data.pass);
        cy.get('#butt1 > .text-join').click();
        //Go to inbox 
        cy.get('div.side-bar [href*="chatroom"]').click({ force: true });
        cy.get('a [class*="message-not-seen"]').eq(0).click();

    });

    it('Send text to Dragutin', () => {
        //Log in
        //   cy.visit('https://app.outpostchess.com/#/login');
        cy.get(':nth-child(1) > .mailin').type(data.email);
        cy.get('#password-padd > .mailin').type(data.pass);
        cy.get('#butt1 > .text-join').click();
        //Go to inbox 
        cy.get('div.side-bar [href*="chatroom"]').click({ force: true });
        cy.get('.list-overflow .opacity').each(($el, index, $list) => {
            if ($el.text().includes(' Dragutin Miladinovic ')) {
                cy.wrap($el).click()
            }
        })
        cy.get('.send_message').type('Porukica automatska');
        cy.get('.right ').click();


    })

    // it('should click on unread message', () => {
    //     cy.visit('https://app.outpostchess.com/#/login');
    //     cy.get(':nth-child(1) > .mailin').type(data.email);
    //     cy.get('#password-padd > .mailin').type(data.pass);
    //     cy.get('#butt1 > .text-join').click();
    //      //Go to inbox 
    //      cy.get('div.side-bar [href*="chatroom"]').click({force: true});
    //      cy.get('.list-overflow .opacity').each(($el, index, $list) => {
    //         if($el.opacity() === '.message-not-seen'){
    //             cy.wrap($el).click()
    //         } else {
    //             cy.log('No new messages :(')
    //         }
    //     })
    // })



});