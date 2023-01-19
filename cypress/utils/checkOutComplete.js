//Selectors
const backHome = `button[data-test='back-to-products']`

export class CheckoutComplete {
    //getters
    getButtonbackHome() { return cy.get(backHome) }

    //actions
    clickBackHome() {
        this.getButtonbackHome().click()
    }
}