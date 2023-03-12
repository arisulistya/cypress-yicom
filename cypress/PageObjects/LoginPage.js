export class Login{
    // Element Objects of login page
    loginPageTxt = "div[class='MuiBox-root css-fd0mt6'] h1";
    emailForm = "#mui-3";
    passwordForm = "#mui-4";
    forgotPswdLink = ".forgt-pw-link"
    loginButton = ".MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-textPrimary.MuiButton-sizeMedium.MuiButton-textSizeMedium.MuiButton-root.MuiButton-text.MuiButton-textPrimary.MuiButton-sizeMedium.MuiButton-textSizeMedium.css-17mjsmg";
    signUpLink = ".link-text-primary";
    englishButton = ".pointer-cursor.countries.language-en-GB";
    hongkongButton = ".pointer-cursor.countries.language-zh-HK";
    chinaButton = ".pointer-cursor.countries.language-zh-CN";
    errorMessageTxt1 = ".messages__error";

    // Login Test Method
    loginTest(email,password){
        cy.get(this.emailForm)
          .type(email);

        cy.get(this.passwordForm)
          .type(password);

        cy.get(this.loginButton)
          .click();
    }

    // Click SignUp link Method
    clickSignUp(){
        cy.get(this.signUpLink)
          .click();
    }

    // Click ForgotPassword link Method
    clickForgotPassword(){
        cy.get(this.forgotPswdLink)
          .click();
    }
    
    // (Assertion) Verify success redirect to login page
    verifyLoginPage(){
        cy.get(this.loginPageTxt)
          .should('have.text', 'Login');

        cy.url()
          .should('eq', 'https://dev.app.yicom.xyz/login');
    }

    // (Assertion) Verify user not found after login
    verifyUserNotFound(){
        cy.get(this.errorMessageTxt1)
          .should('have.text', 'Not found');
    }

    // (Assertion) Verify user success login
    verifySuccessLogin(){
        //this is just an example assertion if user success login
        cy.url()
          .should('eq', 'https://dev.app.yicom.xyz/login');
    }
    
}