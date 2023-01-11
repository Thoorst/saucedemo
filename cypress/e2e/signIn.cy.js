import { SignIn } from '../utils/signIn.js'

//Data
const users = Cypress.env('users')
const password = Cypress.env('password')

describe(`Test suite for signIn`, ()=> {
    beforeEach(() => {
        cy.visit('/')
    })

    it(`SignIn to app`, () => {
        const signIn = new SignIn()

        signIn.typeUserName(users.userStandard)
        signIn.typePassword(password)
        signIn.clickSignIn()
    })
})