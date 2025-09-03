import { CommonPageData } from "../pages/common-page/common-page.data"
import { CommonPageMethods } from "../pages/common-page/common-page.methods"
import { SignupMethods } from "../pages/sign-up/signup.methods"
import { Logger } from "../utilities/logger"

const user = CommonPageMethods.generateRandomString();
const password = CommonPageMethods.generateRandomString(7);

describe(CommonPageData.testSuites.registroYAutenticacion, () =>{
    it('Registro de usuario válido', ()=> {

        Logger.stepNumber(1)
        Logger.step("Navegar a la página de inicio")
        CommonPageMethods.navigateToDemoBlaze()

        Logger.stepNumber(2)
        Logger.step("Hacer clic en Sign Up en la barra de navegacion")
        CommonPageMethods.clickOnSignupOption()

        Logger.stepNumber(3)
        Logger.step("Completar todos los campos obligatorios con informacion válida")
        SignupMethods.insertUsername(user)
        SignupMethods.insertPassword(password)

        Logger.stepNumber(4)
        Logger.step("Hacer clic en el boton Sign up")
        SignupMethods.clickSignupButton()
        Logger.verification('Verificar que se muestre el mensaje "Sign up successful"')
        SignupMethods.verifySignupSuccessfulMessageIsDisplayed()
        
    })
})