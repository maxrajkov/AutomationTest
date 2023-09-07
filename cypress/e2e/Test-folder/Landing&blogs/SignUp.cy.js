/// <reference types="cypress" />

//landing page > SignUp 
// describe('Enter signup page trough landing', () => {
//     it('should navigate to landing page and click on sign up button', () => {
//         cy.visit('https://outpostchess.com/')
//         cy.get('.home_block-1-last__nLmYg > .color-black > .btn600').click()
//     });
// });


//Sign Up feature - Test scenario
describe('Sign up with valid credentials', () => {
    before(function() {                                       //Mocking data form a fixtures folder 
        cy.fixture('usersFile').then(function(data){           //file name (example) only required no need to potint out ".json"
            globalThis.data = data;                         //If "this.data" logic does not work use "globalThis.data" 

        })
    })
    //Positive Test Case 
    it.only('should create an account by inserting valid credentials into the mandatory fields and checking player check-box ', () => {
      
        cy.visit('https://app.outpostchess.com/')

   
       cy.get('.mailin').type(data.email)
       cy.get(':nth-child(1) > .passin').type(data.pass)
       cy.get(':nth-child(2) > .passin').type(data.pass)
       cy.get(':nth-child(1) > :nth-child(1) > .flex-center > input').check()
       cy.get('#butt1 > .text-join').click();
       cy.url('https://test.outpostchess.com').should('include','/thnks');
       cy.get(':nth-child(2) > .thanks-text1').should('have.text','Thank you for joining us.');
    
    
    });

    
});


// //Sign up feature -Negative test case (Invalid Email adress)
// describe('Sign up with Invalid credentials', () => {
//     it('should not be able to create an account by inserting invalid Email adress into the email field and checking  check-box ', () => {
//        cy.visit('https://app.outpostchess.com/#/') 
//        cy.get('.mailin').type('maximbuildcon.org')                               
//        cy.get(':nth-child(1) > .passin').type('12345678')
//        cy.get('.pass-in-password > .passin').type('12345678')
//        cy.get(':nth-child(1) > :nth-child(1) > .flex-center > input').check()
//        cy.get('#butt1 > .text-join').click()
       
//     });

    
// });

//Sign up feature -Negative test case too short password (under 6 characters)



// describe('Sign up with Invalid credentials', () => {
//     it('should not be able to create an account by inserting passwords that are under 6 characters ', () => {
//        cy.visit('https://app.outpostchess.com/#/') 
//        cy.get('.mailin').type('maxim@buildcon.org')                               
//        cy.get(':nth-child(1) > .passin').type('12345')
//        cy.get('.pass-in-password > .passin').type('12345')
//        cy.get(':nth-child(1) > :nth-child(1) > .flex-center > input').check()
//        cy.get('#butt1 > .text-join').click({force: true})
       
//     });

    
// });

//Sign up feature  -Negative 
// describe('Sign up with Invalid credentials', () => {
//     it('should not be able to create an account by inserting invalid Email adress into the email field and checking  check-box ', () => {
//        cy.visit('https://app.outpostchess.com/#/') 
//        cy.get('.mailin').type('maximbuildcon.org')                               
//        cy.get(':nth-child(1) > .passin').type('12345678')
//        cy.get('.pass-in-password > .passin').type('12345678')
//        cy.get(':nth-child(1) > :nth-child(1) > .flex-center > input').check()
//        cy.get('#butt1 > .text-join').click({force: true})
       
//     });


// });

// describe('find class thanks-text1 ', () => {
//     it('should locate class thanks-text1 containing text: "Thank you for joining us"', () => {
//         cy.visit('https://app.outpostchess.com/#/Thanks');
//         cy.get(':nth-child(2) > .thanks-text1').should('have.text','Thank you for joining us.');


//     });
// });   
