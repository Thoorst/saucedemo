import { Inventory } from '../utils/inventory.js'
import { Checkout } from '../utils/checkOut.js'
import { CheckoutComplete } from '../utils/checkOutComplete.js'
import { CheckoutOverview } from '../utils/checkOutOverview.js'
import { Header } from '../utils/header.js'
import { Cart } from '../utils/cart.js'
import { SideBar } from '../utils/sideBar.js'
import checkoutData from '../data/checkoutData.json'

describe(`Test suite: Smoke tests`, ()=> {
    beforeEach(() => {
        cy.visit('/')
    })

    it(`Sign out from app`, () => {
        const header = new Header()
        const sideBar = new SideBar()

        cy.signInStandard()
        header.clickMenu()
        sideBar.clickLogout()
        cy.location().should(loc => {
            expect(loc.pathname).to.include(`/`)
        })
    })

    it(`Make an order with single item`, () => {
        const inventory = new Inventory()
        const checkOut = new Checkout()
        const checkoutComplete = new CheckoutComplete()
        const checkOutOverview = new CheckoutOverview()
        const cart = new Cart()
        const header = new Header()

        cy.signInStandard()
        inventory.clickAddBackpack()
        header.clickShoppingCart()
        cart.clickCheckOut()
        checkOut.typeName(checkoutData.userName)
        checkOut.typeLastName(checkoutData.lastName)
        checkOut.typePostalCode(checkoutData.postCode)
        checkOut.clickContinue()
        checkOutOverview.clickFinish()
        checkoutComplete.clickBackHome()
        cy.location().should(loc => {
            expect(loc.pathname).to.include(`inventory.html`)
        })
    })

    it(`Make an order without any item in shopping cart`, () => {
        const inventory = new Inventory()
        const header = new Header()

        cy.signInStandard()
        inventory.clickAddBackpack()
        header.clickShoppingCart()
        cy.get(`button[data-test='checkout]`).should(`be.disabled`)
    })
})