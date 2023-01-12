//Selectors
const name = `input[data-test='firstName']`
const lastName = `input[data-test='lastName']`
const postalCode = `input[data-test='postalCode']`
const sContinue = `input[data-test='continue']`
const sCancel = `input[data-test='continue']`

export class Checkout{
    typeName(userName){
        cy.get(name).type(userName)
    }

    typeLastName(userLastName){
        cy.get(lastName).type(userLastName)
    }

    typePostalCode(userPostalCode){
        cy.get(postalCode).type(userPostalCode)
    }

    clickContinue(){
        cy.get(sContinue).click()
    }

    clickCancel(){
        cy.get(sCancel).click()
    }
}