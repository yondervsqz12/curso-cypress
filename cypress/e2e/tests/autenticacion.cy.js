import { CommonPageData } from "../pages/common-page/common-page.data";
import { CommonPageElements } from "../pages/common-page/common-page.elements";
import { CommonPageMethods } from "../pages/common-page/common-page.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { Logger } from "../utilities/logger";

describe(CommonPageData.testSuites.autenticacion, () =>{
    it('Inicio de sesion Valido', () => {

        Logger.stepNumber(1)
        Logger.step("Navegar a la página de inicio")
        CommonPageMethods.navigateToDemoBlaze()

        Logger.stepNumber(2)
        Logger.step("Hacer clic en Log In en la barra de navegacion")
        CommonPageMethods.clickOnLoginOption()

        Logger.stepNumber(3)
        Logger.step("Ingresar nombre de usuario y contraseña validos")
        LoginMethods.insertUsername(LoginData.validCredentials.username)
        LoginMethods.insertPassword(LoginData.validCredentials.password)

        Logger.stepNumber(4)
        Logger.step("Hacer clic en el boton Log In para iniciar sesion")
        LoginMethods.clickLoginButton()
        Logger.verification('Verificar que se muestre el mensaje "Login successful"')
        CommonPageMethods.verifySignedUser(LoginData.validCredentials.username)

    });
})