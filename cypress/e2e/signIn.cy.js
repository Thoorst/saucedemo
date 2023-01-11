import { SignIn } from '../utils/signIn.js'

//Data
const screenSize = {1920:1080}

describe(`Test suite for signIn`, ()=> {
    beforeEach(() => {
        cy.visit('/')
    })

    it(`SignIn to app`, () => {
        const signIn = new SignIn()
        signIn.typeUserName(Cypress.env('userStandard'))
    })
})