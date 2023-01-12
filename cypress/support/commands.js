import { SignIn } from '../utils/signIn.js'

Cypress.Commands.add('signIn', (userName, pass) => {
    const signIn = new SignIn()

    signIn.typeUserName(email)
    signIn.typePassword(pass)
    signIn.clickSignIn()
})

Cypress.Commands.add('signInStandard', () => {
    const users = Cypress.env('users')
    const password = Cypress.env('password')

    const signIn = new SignIn()
    signIn.typeUserName(users.userStandard)
    signIn.typePassword(password)
    signIn.clickSignIn()
})