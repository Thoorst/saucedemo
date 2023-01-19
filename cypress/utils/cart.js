import { Inventory } from "./inventory"

//Selectors
const checkout = `button[data-test='checkout']`
const continueShopping = `button[data-test='continue-shopping']`

export class Cart extends Inventory {
    //getters
    getButtonContinueShopping() { return cy.get(continueShopping) }
    getButtonCheckOut() { return cy.get(checkout) }

    //actions
    clickContinueShopping() {
        this.getButtonContinueShopping().click()
    }

    clickCheckOut() {
        this.getButtonCheckOut().click()
    }
}