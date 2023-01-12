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

export class Inventory{
    clickOnItem(selector){
        cy.get(selector).click(userName)
    }

    clickAddBackpack(){
        cy.get(addBackpack).click()
    }

    clickAddBike(){
        cy.get(addBike).click()
    }

    clickAddBoltTshirt(){
        cy.get(addBoltTshirt).click()
    }

    clickAddFleeceJacket(){
        cy.get(addFleeceJacket).click()
    }

    clickAddOnesie(){
        cy.get(addOnesie).click()
    }

    clickRemoveBackpack(){
        cy.get(rmBackpack).click()
    }

    clickRemoveBike(){
        cy.get(rmBike).click()
    }

    clickRemoveBoltTshirt(){
        cy.get(rmBoltTshirt).click()
    }

    clickRemoveFleeceJacket(){
        cy.get(rmFleeceJacket).click()
    }

    clickRemoveOnesie(){
        cy.get(rmOnesie).click()
    }

    clikSort(sortBy){
        cy.get(sort).select(sortBy)
    }
}