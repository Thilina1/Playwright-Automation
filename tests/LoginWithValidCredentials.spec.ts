//updated Playwright Test configuration file to disable parallel test execution


/* This testing code is  automate the login test case with valid credentials*/


import { test, expect } from '@playwright/test';
//import functions from the Playwright framework
const loginBtn='//*[@class="button btn submit primary no-margin-bottom accessSubmit"]';
const email = 'thilinaweerasinghe1@gmail.com'; 
//Store email address to used for login.
const password= '23340Thilina.';
//Store password to used for login.
const userName='Thilina';
//Store user name for check user loged successfully

test('Log in to account using valid credentials', async ({ page }) => {
 
  const profileText= page.locator('.profile-text');
  //Locates the class "profile-text" on the page, which contains the user's name.
 


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


  await expect(profileText).toHaveText(`${userName}`);
  //Asserts that the text content of the profileText element matches the expected username after successfull login.
  });
