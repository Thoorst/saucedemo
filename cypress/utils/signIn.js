//Selectors
const login = `input[id='user-name']`
const password = `input[id='password']`
const signIn = `input[id='login-button']`

export class SignIn {
    //getters
    getInputName() { return cy.get(login) }
    getInputPasswword() { return cy.get(password) }
    getButtonSignin() { return cy.get(signIn) }

    //actions
    typeUserName(userName) {
        this.getInputName().type(userName)
    }

    typePassword(pass) {
        this.getInputPasswword().type(pass)
    }

    clickSignIn() {
        this.getButtonSignin().click()
    }
}