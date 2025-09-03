import { CommonPageData } from "../pages/common-page/common-page.data";
import { CommonPageMethods } from "../pages/common-page/common-page.methods";
import { HomeMethods } from "../pages/home-page/home.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { Logger } from "../utilities/logger";

const user = LoginData.validCredentials.username;
const password = LoginData.validCredentials.password;

describe(CommonPageData.testSuites.catalogoYCompras, () => {
it('Navegacion por categorias', () => {
    
    Logger.stepNumber(1)
    Logger.step("Iniciar sesion como usuario registrado")
    Logger.subStep('Navegar a la aplicación')
    CommonPageMethods.navigateToDemoBlaze()
    Logger.subStep('Hacer clic en Log In en la barra de navegacion')
    CommonPageMethods.clickOnLoginOption()
    Logger.subStep('Ingresar nombre de usuario y contraseña validos')
    LoginMethods.login(user, password)

    Logger.stepNumber(2)
    Logger.step("Navegar a la pagina de inicio")
    CommonPageMethods.clickOnHomeOption()
    
    Logger.stepNumber(3)
    Logger.step("Seleccionar una categoria de productos en el menú de navegación")
    HomeMethods.clickOnMonitorsOption()
    Logger.verification('Verificar que se muestren los productos de la categoria seleccionada')
    HomeMethods.verifyProductDisplayed('Apple monitor 24')

});

})