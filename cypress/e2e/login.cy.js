import login from '../selectors/login.sel'
import Loginn from '../page_objects/login'


describe('Login', () => {

    const login_access = new Loginn()

    // context is the same as describe
    context('unsuccessful', () => {
        beforeEach(() => {
            // visit ('/login') -> will visit baseUrl + /login
            // baseUrl is set in config - cypress.json file
            cy.visit('')
        })

        it('can I click on the aceptar continue button?', () => {
            // cy.get(login.ACEPTAR_CONTINUAR_BUTTON_ELEM).click()

             login_access.click_on_aceptar_continuar_button()
             cy.wait(1000)
             login_access.click_on_area_client_button()
             cy.origin("https://customers.securitasdirect.es", () => {
                cy.visit("/owa-static/login") 
             })
        
            // cy.on("window:confirm", (t) => {
            //     expect(t).to.equal('ACEPTAR Y CONTINUAR')
            // })
            // cy.get(login.emailField).type('random@test.com')
            // cy.get(login.passwordField).type('random_pass')
            // cy.get(login.signInButton).should('have.text', 'Sign in').click()
            // cy.get(login.errorMessages).should('be.visible')
            //     .and('contain', 'email or password is invalid')
        })

        // it('can I click on  Area de Client', function () {
        //     // cy.get('#block-topmenu > .clearfix > :nth-child(2) > a')
        //     //     .click({force: true})

            
        //     // cy.origin("https://customers.securitasdirect.es/owa-static/login", () => {
                
        //     // })
        //     // const password = Cypress.env('password')

        //     // cy.get(login.emailField).type(this.email)
        //     // cy.get(login.passwordField).type(password)
        //     // cy.get(login.signInButton).click()
        //     // cy.get(header.settingsLink).should('be.visible')
        // })

        // it('can see error message when API responds with 500', () => {
        //     const apiUrl = Cypress.env('apiUrl')

        //     cy.intercept('POST', `${apiUrl}/users/login`, {
        //         statusCode: 500,
        //         fixture: 'login_error'
        //     })
        //     cy.get(login.emailField).type('random2@test.com')
        //     cy.get(login.passwordField).type('random_pass{enter}')
        //     cy.get(login.errorMessages).should('be.visible')
        //         .and('contain', 'Error 500 - Internal server error')
        // })
    })

    // context('successful', () => {
    //     beforeEach(() => {
    //         // we need a new user
    //         cy.register().then((response) => {
    //             cy.wrap(response.email).as('email')
    //         })
    //         // log out - clear cookies and localstorage
    //         cy.clearCookies()
    //         cy.clearLocalStorage()

            
    //         //cy.visit('/owa-static/login')
    //     })

        
    // })
})
