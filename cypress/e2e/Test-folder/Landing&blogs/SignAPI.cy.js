/// <reference types="cypress" />

// const Mailosaur = require('cypress-mailosaur');

// const mailosaurClient = new Mailosaur({
//     apiKey: '8ABA7NXaHB8sb0wSZN5hcbTelX0LET90',
// });

// const mailboxId = 'hp0buhml'; 

describe('Shoould sign Up on outpost chess app and activate profile in validation email', () => {
    // let verificationLink;

    before(function() {                                       
        cy.fixture('example').then(function(data){           
            globalThis.data = data;                        

        });
        //Retrieve the verification email using Mailosaur

//          mailosaurClient.messages.search({
//              mailbox: mailboxId,
//              sentTo: 'maxim1@hp0buhml.mailosaur.net', // Replace with the email address used for signing up
//          }).then((messages) => {
//              // Assuming you found the latest message sent to the specified email address
//              const latestMessage = messages.items[1];
 
//              // Extract and parse the email content
//              const emailContent = JSON.parse(latestMessage.html.body);
 
//              // Assuming the verification link is in the email content
//              verificationLink = emailContent.link;
         
//    });

    });   
   
    it('should create an account and validate it trough email', () => {
        cy.visit('https://app.outpostchess.com/#/');
        cy.get('[class="mailin"]').type(data.email);
        cy.get(':nth-child(1) > .passin').type(data.pass);
        cy.get(':nth-child(2) > .passin').type(data.pass);
        cy.get(':nth-child(1) > :nth-child(1) > .flex-center > input').check();
        cy.get('#butt1 > .text-join').click();
        cy.url('https://app.outpostchess.com').should('include','/Thanks');
        cy.get(':nth-child(2) > .thanks-text1').should('have.text','Thank you for joining us.');
        cy.visit(verificationLink);
        cy.url().should('include', '/ProfileActivated');
        


    });
    it.only('should log in and create a profile', () => {
        cy.viewport(1440, 900);
        cy.visit('https://app.outpostchess.com/#/login');
      //  cy.('https://app.outpostchess.com/#/login').should('have.a.property','body');
        cy.get(':nth-child(1) > .mailin').type(data.email);
        cy.get('#password-padd > .mailin').type(data.pass);
        cy.get('#butt1 > .text-join').click();
        cy.url('https://app.outpostchess.com').should('include','/home-page'); 
        cy.get(':nth-child(1) > .side-options > .left-sidetext').click();
        cy.get('#middle2 > #middle2-button-container > a > .svg-pancil').click();
        cy.get('a.flex-center > .rows > .grid-rows > .main-data').click();
        cy.get(':nth-child(1) > .flex-center2 > :nth-child(1) > .main-data2 > input').clear().type(data.first_name);
        cy.get(':nth-child(2) > .flex-center2 > :nth-child(1) > .main-data2 > input').clear().type(data.last_name);
        cy.get('.confirm-button-acive').click();
        cy.get('a.flex-center > .rows > .grid-rows > .main-data').should('have.text',' Maksim Rajkovic ');
        cy.get(':nth-child(3) > .grid-rows > .main-data').click();
        cy.get('.month-flex > .flex-center').click();
        cy.get(':nth-child(6) > .month-css').click();
        cy.get('.day-pick > :nth-child(2) > .input-birthday').clear().type(data.birth_day);
        cy.get('.year-pick > .input-birthday').clear().type(data.birth_year);
        cy.get('.confirm-button').click();
        cy.get(':nth-child(3) > .grid-rows > .main-data > p').should('have.text',' June 27, 2001 ');
        cy.get(':nth-child(4) > .grid-rows > .main-data').click();
        cy.get('#male').click();
        cy.get('#male').should('be.checked')
        cy.get('.confirm-button').click();
        cy.get(':nth-child(4) > .grid-rows > .main-data').should('include.text','Male');
        cy.get('.margin-right > .main-data').click()
        cy.get('.flex-center.row-three').should('include.text','Federation');
        cy.get('input').type('Serbia');
        cy.get('#federation_list p').click()
        cy.get('.margin-right > .main-data').should('have.text',' Serbia ');
        cy.get('.main-data > input').type(' Belgrade ');
        cy.get('.fide-input').click();
        cy.get(':nth-child(1) > .flex-center2 > :nth-child(1) > .main-data2 > .small-input').clear().type(data.fide_ID);
        cy.get('.confirm-button').click();
        cy.get('.fide-input').should('include.text','1132');
        cy.get('[href="#/edit-biography"] > p').click();
        cy.get('.ProseMirror').clear().type(data.about_me);
        cy.get('.confirm-button-acive').click();
        cy.get('#profile-name').should('have.text','Maksim Rajkovic');
        cy.get('.profile-info1 > :nth-child(1)').should('include.text','22');
        cy.get('.info-par > img').should('exist');
        cy.get(':nth-child(3) > :nth-child(3) > .info-par').should('include.text','1132');
        cy.get('#about-me').should('include.data','data.about_me');




        

        










       
      
    });
}); 
