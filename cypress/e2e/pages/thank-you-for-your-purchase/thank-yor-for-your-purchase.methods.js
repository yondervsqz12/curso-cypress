import { ThankYouForYourPurchaseElements } from "./thank-you-for-yorr-purchase.elements";

export class ThankYouForYourPurchaseMethods {
    static cliclOnOkButton() {
        ThankYouForYourPurchaseElements.buttons.ok.click()
    }

    static verifyGreenCheckMarkIsDisplayed() {
        ThankYouForYourPurchaseElements.icons.greenCheckMark.should('exist')
    }
}