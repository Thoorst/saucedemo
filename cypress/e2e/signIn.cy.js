import { SignIn } from '../utils/signIn.js'
import { Inventory } from '../utils/inventory.js'
import { Checkout } from '../utils/checkOut.js'
import { CheckoutComplete } from '../utils/checkOutComplete.js'
import { CheckoutOverview } from '../utils/checkOutOverview.js'
import { Header } from '../utils/header.js'
import { Cart } from '../utils/cart.js'
import { SideBar } from '../utils/sideBar.js'

//Data
const users = Cypress.env('users')
const password = Cypress.env('password')

describe(`Test suite for signIn`, ()=> {
    beforeEach(() => {
        cy.visit('/')
    })

    it(`Sign in to app`, () => {
        const signIn = new SignIn()

        signIn.typeUserName(users.userStandard)
        signIn.typePassword(password)
        signIn.clickSignIn()
        cy.location().should(loc => {
            expect(loc.pathname).to.include(`inventory.html`)
        })
    })

    it(`Sign in: wrong credentials provided`, () => {
        const signIn = new SignIn()

        signIn.typeUserName(users.userStandard)
        signIn.typePassword(`wrongPassword`)
        signIn.clickSignIn()
        cy.contains('Epic sadface: Username and password do not match any user in this service')
    })

    it(`Sign out from app`, () => {
        const header = new Header()
        const sideBar = new SideBar()

        cy.signInStandard()
        header.clickMenu()
        sideBar.clickLogout()
        //validation
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
        checkOut.typeName()
        checkOut.typeLastName()
        checkOut.typePostalCode()
        checkOut.clickContinue()
        checkOutOverview.clickFinish()
        checkoutComplete.clickBackHome()
        //validation
    })


})