//Selectors
const login = `input[id='user-name']`
const password = `input[id='password']`
const signIn = `input[id='login-button']`

export class SignIn{
    typeUserName(userName){
        cy.get(login).type(userName)
    }

    typePassword(pass){
        cy.get(password).type(pass)
    }

    clickSignIn(){
        cy.get(signIn).click()
    }
}