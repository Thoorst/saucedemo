//Selectors
const backHome = `button[data-test='back-to-products']`

export class CheckoutComplete{
    clickBackHome(){
        cy.get(backHome).click()
    }
}