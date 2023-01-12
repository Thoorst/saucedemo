import { Cart } from '../utils/cart.js'

describe(`Test suite for inventory page`, ()=> {
    beforeEach(() => {
        cy.visit('/')
    })

    it(`Add item to shopping cart`, () => {
        const cart = new Cart()
        cy.signInStandard()
        cart.clickAddBackpack()
        cy.contains(`.shopping_cart_badge`, 1)
        cy.contains(`Remove`).should(`have.attr`, `data-test`, `remove-sauce-labs-backpack`)
    })

    it(`Remove item from shopping cart`, () => {
        const cart = new Cart()
        cy.signInStandard()
        cart.clickAddBackpack()
        cart.clickRemoveBackpack()
        cy.contains(`#add-to-cart-sauce-labs-backpack`, `Add to cart`)
        cy.get(`.shopping_cart_badge`).should('not.exist')
    })
})