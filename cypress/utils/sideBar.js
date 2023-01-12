//Selectors
const allItems = `a[id='inventory_sidebar_link']`
const about = `a[id='inventory_sidebar_link']`
const resetAppState = `a[id='reset_sidebar_link']`
const logout = `a[id='logout_sidebar_link']`
const closeSideBar = `a[id='react-burger-cross-btn']`

export class SideBar{
    clickAllItems(){
        cy.get(allItems).click()
    }

    clickAbout(){
        cy.get(about).click()
    }

    clickResetAppState(){
        cy.get(resetAppState).click()
    }

    clickLogout(){
        cy.get(logout).click()
    }

    clickCloseSideBar(){
        cy.get(closeSideBar).click()
    }
}