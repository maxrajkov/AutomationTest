class application_PO {

    visitSignUp() {
        cy.visit(Cypress.env("signUpPage"));
    }

    go_to_my_Profile() {
        cy.get(':nth-child(1) > .side-options > .left-sidetext').click();
    }

    // go_to_Inbox() {
    //     cy.get('div.side-bar [href*="chatroom"]').click();
    // }

    go_to_search() {

    }

}

export default application_PO;