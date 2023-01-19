//Selectors
const allItems = `a[id='inventory_sidebar_link']`
const about = `a[id='inventory_sidebar_link']`
const resetAppState = `a[id='reset_sidebar_link']`
const logout = `a[id='logout_sidebar_link']`
const closeSideBar = `a[id='react-burger-cross-btn']`

export class SideBar {
    //getters
    getButtonAllItems() { return cy.get(allItems) }
    getButtonAbout() { return cy.get(about) }
    getButtonResetAppState() { return cy.get(resetAppState) }
    getButtonLogOut() { return cy.get(logout) }
    getButtonCloseSideBar() { return cy.get(closeSideBar) }

    //actions
    clickAllItems() {
        this.getButtonAllItems().click()
    }

    clickAbout() {
        this.getButtonAbout().click()
    }

    clickResetAppState() {
        this.getButtonResetAppState().click()
    }

    clickLogout() {
        this.getButtonLogOut().click()
    }

    clickCloseSideBar() {
        this.getButtonCloseSideBar().click()
    }
}