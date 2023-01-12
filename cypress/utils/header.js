//Selectors
const shoppingCart = `div[id='shopping_cart_container']`
const menu = `button[id='react-burger-menu-btn']`

export class Header{
    clickShoppingCart(){
        cy.get(shoppingCart).click()
    }

    clickMenu(){
        cy.get(menu).click()
    }
}