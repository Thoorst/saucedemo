import { Checkout } from "./checkOut"

//Selectors
const sFinish = `input[data-test='finish']`

export class CheckoutOverview extends Checkout{
    clickFinish(){
        cy.get(sFinish).click()
    }
}