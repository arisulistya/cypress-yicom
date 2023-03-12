require('cypress-xpath');

export class ForgotPassword{
    // Element Objects of ForgotPassword Page
    forgotPasswordTxt = "p[type='h5']";
    errorMessageTxt1 = "p[type='h7-semibold-error']";
    emailForm = "//input[@name='email']";
    sendButton = ".MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-textPrimary.MuiButton-sizeMedium.MuiButton-textSizeMedium.MuiButton-root.MuiButton-text.MuiButton-textPrimary.MuiButton-sizeMedium.MuiButton-textSizeMedium.css-17mjsmg";
    backButton = "p[type='h7-bold']";

    // Send ForgotPassword request Method
    forgotPasswordTest(email){
        cy.xpath(this.emailForm)
          .type(email);

        cy.get(this.sendButton)
          .click();
    }

    // Click back button Method
    backToLoginPage(){
        cy.get(this.backButton)
          .click();
    }

    // (Assertion) Verify success send orgot password request
    verifySuccessSendReq(){
        // this is just an example scenario if success send request forgot password
        cy.url()
          .should('eq', 'https://dev.app.yicom.xyz/forgot-password');
    }

    // (Assertion) Verify shows validation of incorrect email
    verifyInvalidEmail(){
        cy.get(this.errorMessageTxt1)
          .should('have.text', 'Please enter a valid email address.');
    }

    // (Assertion) Verify success redirected to forgot password page
    verifyForgotPswdPage(){
        cy.get(this.forgotPasswordTxt)
          .should('have.text', 'Forgot Password?');

        cy.url()
          .should('eq', 'https://dev.app.yicom.xyz/forgot-password');
    }
}