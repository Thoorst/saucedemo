import { Checkout } from "./checkOut"

//Selectors
const sFinish = `button[id='finish']`

export class CheckoutOverview extends Checkout {
    //getters
    getButtonFinish() { return cy.get(sFinish) }

    //actions
    clickFinish() {
        this.getButtonFinish().click()
    }
}