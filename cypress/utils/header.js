//Selectors
const shoppingCart = `div[id='shopping_cart_container']`
const menu = `button[id='react-burger-menu-btn']`

export class Header {
    //getters
    getButtonShoppingCart() { return cy.get(shoppingCart) }
    getButtonMenu() { return cy.get(menu) }

    //actions
    clickShoppingCart() {
        this.getButtonShoppingCart().click()
    }

    clickMenu() {
        this.getButtonMenu().click()
    }
}