import { ForgotPassword } from "../../PageObjects/ForgotPasswordPage";
import { Login } from "../../PageObjects/loginPage";

describe('Forgot Password Test Scenario', () => {
    beforeEach(() => {
        cy.visit("https://dev.app.yicom.xyz/login")
        const ln = new Login()
        const fn = new ForgotPassword()
        ln.clickForgotPassword()
        fn.verifyForgotPswdPage()
    })
    
    // Click back button work correctly
    it('Back button behavior', () => {
        const fn = new ForgotPassword()
        const ln = new Login()
        fn.backToLoginPage()
        ln.verifyLoginPage()
        ln.clickForgotPassword()
        fn.verifyForgotPswdPage()
    })

    // Send request forgot password using data-driven test
    it('Forgot Password User Test', () => {
        cy.fixture("userData").then((data) => {
            data.forEach((userData) => {
                const fn = new ForgotPassword()
                fn.forgotPasswordTest(userData.email)

                if(userData.email=='jason.group@mailinator.com'){
                    fn.verifySuccessSendReq()
                    cy.visit("https://dev.app.yicom.xyz/forgot-password")
                }
                else{
                    fn.verifyInvalidEmail()
                }
            })
        })
    })
})