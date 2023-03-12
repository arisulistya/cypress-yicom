import { Login } from "../../PageObjects/loginPage"

describe('Login Test Scenario', () => {
    beforeEach(() => {
        cy.visit("https://dev.app.yicom.xyz/login")
        const ln = new Login()
        ln.verifyLoginPage()
    })

    // Validation for Incorrect email and password (using hardcode data)
    it('Login Not found', () => {
        const ln = new Login()
        ln.loginTest("user.notfound@mailinator.com","Temp123#")
        ln.verifyUserNotFound()
    })

    // Success Login scenario (using hardcode data)
    it('Succes Login', () => {
        const ln = new Login()
        ln.loginTest("jason.kasa@mailinator.com","Temp123#")
        ln.verifySuccessLogin()
    })

    // Login Test Scenario using data-driven test
    it.only('Login User Test', () => {
        // Get data from json file
        cy.fixture("userData").then((data) => {
            // loop testing based on data count
            data.forEach((userData) => {
                // Call login method
                const ln = new Login()
                ln.loginTest(userData.email,userData.password)
                // Call assertion method or each scenario
                if(userData.email=='jason.group@mailinator.com' && userData.password=='Temp123#'){
                    ln.verifySuccessLogin()
                    // return to login page
                    cy.visit("https://dev.app.yicom.xyz/login")
                }
                else{
                    ln.verifyUserNotFound()
                }

            })

        })
    })

})