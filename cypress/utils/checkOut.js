//Selectors
const name = `input[data-test='firstName']`
const lastName = `input[data-test='lastName']`
const postalCode = `input[data-test='postalCode']`
const sContinue = `input[data-test='continue']`
const sCancel = `input[data-test='continue']`

export class Checkout {
    //getters
    getInputname() { return cy.get(name) }
    getInputLastName() { return cy.get(lastName) }
    getInputpostalCode() { return cy.get(postalCode) }
    getButtonContinue() { return cy.get(sContinue) }
    getButtonCancel() { return cy.get(sCancel) }

    //actions
    typeName(userName) {
        this.getInputname().type(userName)
    }

    typeLastName(userLastName) {
        this.getInputLastName().type(userLastName)
    }

    typePostalCode(userPostalCode) {
        this.getInputpostalCode().type(userPostalCode)
    }

    clickContinue() {
        this.getButtonContinue().click()
    }

    clickCancel() {
        this.getButtonCancel().click()
    }
}