import homeSel from "../selectors/home.sel"

class Loginn {

    click_on_aceptar_continuar_button() {
        cy.get(homeSel.ACEPTAR_CONTINUAR_BUTTON_ELEM).click()
            
        cy.on("window:confirm", (t) => {
            expect(t).to.equal('ACEPTAR Y CONTINUAR')
        })
    }

    click_on_area_client_button() {
        cy.get(homeSel.AREA_CLIENT_BUTTON_ELEM)
            .click({force: true})

        //     cy.origin("https://customers.securitasdirect.es/owa-static/login", () => {
        //         // cy.get("#login_field").type("*****@gmail.com");
        //         // cy.get("#password").type("********");
        //         // cy.get("input").contains("Sign in").click();
        
        // })
        
       
        
        
        
        
    }

}

export default Loginn


// it('can I click on the aceptar continue button?', () => {
//     cy.visit("https://www.securitasdirect.es/#/");

//     login_access.click_on_aceptar_continuar_button()

//     cy.origin("https://customers.securitasdirect.es/owa-static/login", () => {
//         // cy.get("#login_field").type("*****@gmail.com");
//         // cy.get("#password").type("********");
//         // cy.get("input").contains("Sign in").click();

// })

// it("should login to netlify with github", () => {
// //  // visit netlify
// //  cy.visit("https://www.securitasdirect.es/#/");


// //  cy.get(".icon-hamburger").click({ force: true });
// //  cy.contains("Log in").click({ force: true });
// //  cy.contains("GitHub").click({ force: true });

// //  // click on 'login with Github' button

// });
// })