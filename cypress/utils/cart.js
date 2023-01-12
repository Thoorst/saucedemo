import { Inventory } from "./inventory"

//Selectors
const checkout = `button[data-test='checkout']`
const continueShopping = `button[data-test='continue-shopping']`

export class Cart extends Inventory{
    clickContinueShopping(){
        cy.get(continueShopping).click()
    }

    clickCheckOut(){
        cy.get(checkout).click()
    }
}