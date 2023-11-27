///<reference types="cypress" />

//My profile 
describe('Create profile ', () => {
    before(function() {                                       
        cy.fixture('example').then(function(data){           
            globalThis.data = data;                        

        });

    });    
     
    it.only('should log in and create a profile', () => {
        cy.viewport(1440, 900);
        //Log in
        cy.visit('https://app.outpostchess.com/#/login');
        cy.get(':nth-child(1) > .mailin').type(data.email);
        cy.get('#password-padd > .mailin').type(data.pass);
        cy.get('#butt1 > .text-join').click();
        //successful Log-in 
        cy.url('https://app.outpostchess.com').should('include','/home-page'); 
         //Navigate to my profile 
        cy.get(':nth-child(1) > .side-options > .left-sidetext').click();
        //Navigate to profile edit 
        cy.get('#middle2 > #middle2-button-container > a > .svg-pancil').click();
        //Edit Name 
        cy.get('a.flex-center > .rows > .grid-rows > .main-data').click();
        cy.get(':nth-child(1) > .flex-center2 > :nth-child(1) > .main-data2 > input').clear().type(data.first_name);
        cy.get(':nth-child(2) > .flex-center2 > :nth-child(1) > .main-data2 > input').clear().type(data.last_name);
        cy.get('.confirm-button-acive').click();
        cy.get('a.flex-center > .rows > .grid-rows > .main-data').should('have.text',' Maksim Rajkovic ');
        //Edit Birthdate
        cy.get(':nth-child(3) > .grid-rows > .main-data').click();
        cy.get('.month-flex > .flex-center').click();
        cy.get(':nth-child(6) > .month-css').click();
        cy.get('.day-pick > :nth-child(2) > .input-birthday').clear().type(data.birth_day);
        cy.get('.year-pick > .input-birthday').clear().type(data.birth_year);
        cy.get('.confirm-button').click();
        cy.get(':nth-child(3) > .grid-rows > .main-data > p').should('have.text',' June 27, 2001 ');
        //Select gendar 
        cy.get(':nth-child(4) > .grid-rows > .main-data').click();
        cy.get('#male').click();
        cy.get('#male').should('be.checked')
        cy.get('.confirm-button').click();
        cy.get(':nth-child(4) > .grid-rows > .main-data').should('include.text','Male');
        //select Federation
        cy.get('.margin-right > .main-data').click()
        cy.get('.flex-center.row-three').should('include.text','Federation');
        cy.get('input').type('Serbia');
        cy.get('#federation_list p').click()
        cy.get('.margin-right > .main-data').should('have.text',' Serbia ');
        //Enter Location 
        cy.get('.main-data > input').type(' Belgrade ');
        cy.get('.fide-input').click();
        //Enter ID
        cy.get(':nth-child(1) > .flex-center2 > :nth-child(1) > .main-data2 > .small-input').clear().type(data.fide_ID);
        cy.get('.confirm-button').click();
        cy.get('.fide-input').should('include.text','1132');
        //Enter Biography
        cy.get('[href="#/edit-biography"] > p').click();
        cy.get('.ProseMirror').clear().type(data.about_me);
        cy.get('.confirm-button-acive').click();
        //Confirm profile info 
        cy.get('#profile-name').should('have.text','Maksim Rajkovic');
        cy.get('.profile-info1 > :nth-child(1)').should('include.text','22');
        cy.get('.info-par > img').should('exist');
        cy.get(':nth-child(3) > :nth-child(3) > .info-par').should('include.text','1132');
         //  cy.get('#about-me').should('include.data','data.about_me');
         //Log out
         cy.get('.profile-pic-otpion').click();
         //cy.document('.profile-pic-otpion').should('have.property','.dropdown-content')
         cy.get('.dropdown-content > :nth-child(2)').click();
        
    });    

});