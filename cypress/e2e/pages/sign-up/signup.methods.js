import { CommonPageMethods } from "../common-page/common-page.methods";
import { SignupElements } from "./signup.elemets";

export class SignupMethods {

    static insertUsername(username) {
        SignupElements.textBoxes().username.invoke('val', username)
    }

    static insertPassword(password) {
        SignupElements.textBoxes().password.invoke('val', password)
    }

    static clickSignupButton() {
        SignupElements.buttons.signup.click()
    }

    static signup(username, password) {

        this.insertUsername(username)
        this.insertPassword(password)
        this.clickSignupButton()

    }

    static verifySignupSuccessfulMessageIsDisplayed() {
        CommonPageMethods.verifyAlert('Sign up successful.')
    }

    static verifyThatThisUserAlreadyExistMessageIsDisplayed() {
        CommonPageMethods.verifyAlert('This user already exist.')
    }

}