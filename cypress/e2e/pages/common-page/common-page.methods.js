import { CommonPageData } from "./common-page.data";
import { CommonPageElements } from "./common-page.elements";

export class CommonPageMethods {
    
    static navigateToDemoBlaze() {
        cy.clearCookies();
        cy.visit(CommonPageData.url)
    }

    static clickOnHomeOption() {
        CommonPageElements.topMenu.home.click()
    }

    static clickOnContactOption() {
        CommonPageElements.topMenu.contact.click()
    }

    static clickOnAboutUsOption() {
        CommonPageElements.topMenu.aboutUs.click()
    }

    static clickOnCartOption() {
        CommonPageElements.topMenu.cart.click()
    }

    static clickOnLoginOption() {
        CommonPageElements.topMenu.login.click()
    }

    static clickOnSignupOption() {
        CommonPageElements.topMenu.signup.click() 
    }

    static verifyAlert(expectedMessage) {
        cy.on('window:alert', (str) => {
            expect(str).to.equal(expectedMessage)
        })
    }

   static generateRandomString(length=10) {
    var result           = '';
    var characters       = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}


}