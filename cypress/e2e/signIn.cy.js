import { SignIn } from '../utils/signIn.js'

//Data
const users = Cypress.env('users')
const password = Cypress.env('password')

describe(`Test suite for signIn page`, ()=> {
    beforeEach(() => {
        cy.visit('/')
    })

    it(`Sign in to app standard user`, () => {
        const signIn = new SignIn()

        signIn.typeUserName(users.userStandard)
        signIn.typePassword(password)
        signIn.clickSignIn()
        cy.location().should(loc => {
            expect(loc.pathname).to.include(`inventory.html`)
        })
    })

    it(`Sign in to app user locked out user`, () => {
        const signIn = new SignIn()

        signIn.typeUserName(users.userLocked)
        signIn.typePassword(password)
        signIn.clickSignIn()
        cy.contains('Epic sadface: Sorry, this user has been locked out.').should('be.visible')
        cy.location().should(loc => {
            expect(loc.pathname).to.include(``)
        })
    })
    
    it(`Sign in: wrong credentials provided`, () => {
        const signIn = new SignIn()

        signIn.typeUserName(users.userStandard)
        signIn.typePassword(`wrongPassword`)
        signIn.clickSignIn()
        cy.contains('Epic sadface: Username and password do not match any user in this service').should('be.visible')
        cy.location().should(loc => {
            expect(loc.pathname).to.include(``)
        })
    })
})