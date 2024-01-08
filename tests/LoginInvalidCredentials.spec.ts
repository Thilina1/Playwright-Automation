//updated Playwright Test configuration file to disable parallel test execution


/* This testing code is  automate the login test case with invalid credentials. and after go to 
change password and type email on the text input field*/


import { test, expect } from '@playwright/test';


const loginBtn='//*[@class="button btn submit primary no-margin-bottom accessSubmit"]';
//Store xpath of login button in loginBtn variable.
const email = 'thilinaweerasinghe1@gmail.com'; 
//Store email address to used for login.
const password= '23340Thilin';
//Store password to used for login.
const error= '//*[@id="login-error-message"]';
//Store xpath of login error message in error variable.
const errorMessage='Your email or password is incorrect. Please try again.';
//Store login error message in errorMessage variable.

test('login with invalid', async ({ page }) => {
   test.setTimeout(60000);

   await page.goto('https://onlinelibrary.wiley.com/');
   //Navigate to the https://onlinelibrary.wiley.com website.

   await page.getByLabel('Log in or Register').click();
   //Clicks the "Log in or Register" button.
   await page.getByLabel('Email or Customer ID').fill(email);
   //Fills the "Email or Customer ID" field with the provided email.
   await page.getByPlaceholder('Enter your password').fill(password);
   //Fills the password field with the provided password.
   await page.locator(loginBtn).click();
   //Clicks the "Log In" button.

   await expect(page.locator(error)).toHaveText(errorMessage);
   //Verifying that an error message matches the expected message.
   await page.getByRole('link', { name: 'Forgot password?' }).click();
   //Clicking on a "Forgot password?" link.
   await page.getByRole('textbox', { name: 'Email', exact: true }).fill('thilinaweerasinghe1@gmail.com');
   //Filling in the email address in a text input with the 'Email'.


});