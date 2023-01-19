//Selectors
const addBackpack = `button[data-test='add-to-cart-sauce-labs-backpack']`
const rmBackpack = `button[data-test='remove-sauce-labs-backpack']`
const addBike = `button[data-test='add-to-cart-sauce-labs-bike-light']`
const rmBike = `button[data-test='remove-sauce-labs-bike-light']`
const addBoltTshirt = `button[data-test='add-to-cart-sauce-labs-bolt-t-shirt']`
const rmBoltTshirt = `button[data-test='remove-sauce-labs-bolt-t-shirt']`
const addFleeceJacket = `button[data-test='add-to-cart-sauce-labs-fleece-jacket']`
const rmFleeceJacket = `button[data-test='remove-sauce-labs-fleece-jacket']`
const addOnesie = `button[data-test='add-to-cart-sauce-labs-onesie']`
const rmOnesie = `button[data-test='remove-sauce-labs-onesie']`
const sort = `select[data-test='product_sort_container']`

export class Inventory {
    //getters
    getButtonAddBackpack() { return cy.get(addBackpack) }
    getButtonAddBike() { return cy.get(addBike) }
    getButtonAddBoltTshirt() { return cy.get(addBoltTshirt) }
    getButtonFleeveJacket() { return cy.get(addFleeceJacket) }
    getButtonOnesie() { return cy.get(addOnesie) }
    getButtonRemoveBackpack() { return cy.get(rmBackpack) }
    getButtonRemoveBoltTshirt() { return cy.get(rmBoltTshirt) }
    getButtonRemoveBike() { return cy.get(rmBike) }
    getButtonRemoveFleevejacket() { return cy.get(rmFleeceJacket) }
    getButtonRemoveOnesie() { return cy.get(rmOnesie) }
    getSelectSort() { return cy.get(sort) }

    //actions
    clickOnItem(selector) {
        cy.get(selector).click(userName)
    }

    clickAddBackpack() {
        this.getButtonAddBackpack().click()
    }

    clickAddBike() {
        this.getButtonAddBike().click()
    }

    clickAddBoltTshirt() {
        this.getButtonAddBoltTshirt().click()
    }

    clickAddFleeceJacket() {
        this.getButtonFleeveJacket().click()
    }

    clickAddOnesie() {
        this.getButtonOnesie().click()
    }

    clickRemoveBackpack() {
        this.getButtonRemoveBackpack().click()
    }

    clickRemoveBike() {
        this.getButtonRemoveBike().click()
    }

    clickRemoveBoltTshirt() {
        this.getButtonRemoveBoltTshirt().click()
    }

    clickRemoveFleeceJacket() {
        this.getButtonRemoveFleevejacket().click()
    }

    clickRemoveOnesie() {
        this.getButtonRemoveOnesie().click()
    }

    clikSort(sortBy) {
        this.getSelectSort.select(sortBy)
    }
}