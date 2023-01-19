import { Inventory } from '../utils/inventory.js'

describe(`Test suite for inventory page`, ()=> {
    beforeEach(() => {
        cy.visit('/')
    })

    it(`Add item to shopping cart`, () => {
        const inventory = new Inventory()
        cy.signInStandard()
        inventory.clickAddBackpack()
        inventory.getButtonRemoveBackpack().should('be.visible').and('be.enabled')
    })

    it(`Remove item from shopping cart`, () => {
        const inventory = new Inventory()
        cy.signInStandard()
        inventory.clickAddBackpack()
        inventory.clickRemoveBackpack()
        inventory.getButtonAddBackpack().should('be.visible').and('be.enabled')
    })
})