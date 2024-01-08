//updated Playwright Test configuration file to disable parallel test execution


/* 
1) This testing code is  automate the login test case with invalid credentials and after
2) Login user search the Testing Methodologies
3) after click on the result
4) Then click on PDF 
5) And select Online-only access radio button
6) Then click on check out 
7) after again search Testing Methodologies
8) And after click on the result
9) Then click on PDF 
10)And select Online-only access radio button
11)Then click on check out button
12)Next first remove 2nd item on the cart and then remove remaining item from cart and check emptyness.
*/


import { test, expect } from '@playwright/test';
//import functions from the Playwright framework


let testingBookPrice =18.00;
//price of Testing Methodologies Book
let SDLCBookPrice=18.00;
//price of Software Development Life Cycle
let Total=0.00;
//Total cost


const search = '//*[@id="searchField1"]';
//assigns an XPath selector of search input field
const email = 'thilinaweerasinghe1@gmail.com'; 
//Store email address to used for login.
const password= '23340Thilina.';
//Store password to used for login.
const firstSearch='Software Development Life Cycle';
//Store keyword for search 1st time.
const secondSearch='Testing Methodologies';
//Store keyword for search 2nd time.
const searchResultVirew1='Software Development Life Cycle';
//Store 'Software Development Life Cycle' text on searchResultVirew1 variable.
const searchResultVirew2='Testing Methodologies';
//Store 'Testing Methodologies' text on searchResultVirew2 variable.


test('Check out', async ({ page }) => {
  test.setTimeout(200000);


  await page.goto('https://onlinelibrary.wiley.com/');
  ///Navigate to the https://onlinelibrary.wiley.com website.


  await page.getByLabel('Log in or Register').click();
  //Clicks the "Log in or Register" button.
  await page.getByLabel('Email or Customer ID').fill(email);
  //Fills the "Email or Customer ID" field with the provided email.
  await page.getByPlaceholder('Enter your password').fill(password);
  //Fills the password field with the provided password.
  await page.getByRole('button', { name: 'Log In' }).click();
  //Clicks the "Log In" button.
  

  await page.locator(search).fill(firstSearch);
  await page.keyboard.press('Enter');


  //--View First Item--
  await page.getByRole('link', { name: searchResultVirew1, exact: true }).click();
  //Finds a link on the web page with a specific name value of variable stored on on "searchResultVirew1" and clicks on it.
  await page.getByRole('link', { name: 'ePDF' }).click();
  //Fiends link with the text 'ePDF' and clicks on it.
  await page.getByText('Online-only access').click();
  //It finds an element with the text 'Online-only access' and clicks on it.

  //--Add item to the cart--
  await page.getByRole('link', { name: 'Check out' }).click();
  //Finds a link on the web page with the text 'Check out' and clicks on it.
  const orderTotalID= page.getByText('$').last();
  //Find last element on the page containing the text '$' and assigns it to the variable orderTotalID. 
  const orderTotalText = await orderTotalID.innerText();
  //Retrieves the text content of the element identified as the orderTotalID and assigns it to the variable orderTotalText using the innerText() method.
  Total=SDLCBookPrice+Total;
  //Add the value of SDLCBookPrice to the existing value of Total
  let textTotal=String(Total);
  //Converts the updated Total to a string and assigns it to the variable textTotal.
  console.log("Expected Output after add 1st item:",textTotal);
  //Print the expected calculated total after adding the first item for test case develper use.
  console.log("Actual Output after add 1st item:", orderTotalText);
  //Print the actual total after adding the first item for test case develper use.
  await expect(orderTotalID).toContainText(textTotal);
  //This use for assert that the orderTotalID element should contain the text content equal to textTotal. This is a used for assertion automated testing.
  
  
  //--View second Item--
  await page.getByRole('searchbox', { name: 'Search term' }).fill(secondSearch);
  await page.keyboard.press('Enter');
  //Type text on search box and click enter
  await page.getByRole('link', { name: searchResultVirew2, exact: true }).click();
  //Finds a link with a variable searchResultVirew2s' value and clicks on it.
  await page.getByRole('link', { name: 'ePDF' }).click();
  //Finds a link with the text 'ePDF' and clicks on it.
  await page.getByText('Online-only access').click();
  //Finds an element with the text 'Online-only access' and clicks on it.



  //--Add another (2nd) item to the cart--
  await page.getByRole('link', { name: 'Check out' }).click();
  //From the web page find a link with the accessible name 'Check out' using the getByRole function and click on it.
  const orderTotalID2= page.getByText('$').last();
  //Locates the last element on the page containing the '$' symbol. Last item containing the '$' is Order total.
  const orderTotalText2 = await orderTotalID2.innerText();
  //gets text of orderTotalID2 HTML elements and assign it to  orderTotalText2
  Total=testingBookPrice+Total;
  //Add price of the above added item from the total (Total) This is used for calculate the expected result and match it with actual result.
  textTotal=String(Total);
  //Converts the updated Total value to a string and asign it to texttotal.
  console.log("Expected Output after add 2nd item:", textTotal);
  //Prints the updated total value to the console for developers' use.
  console.log("Actual Output after add 1st item:", orderTotalText2);
  //Prints the converted value on the console.
  await expect(orderTotalID2).toContainText(textTotal);
  //Verifying that actual result matches the expected result.



  //--Remove 2nd item from the cart--
  await page.getByRole('link', { name: 'Remove' }).nth(1).click();
  //Finds the second link with the role 'Remove' and clicks on it, Using that action remove the second item from the cart.
  const orderTotalID3= page.getByText('$').last();
  //Locates the last element on the page containing the '$' symbol. Last item containing the '$' is Order total.
  const orderTotalText3 = await orderTotalID3.innerText();
  //gets text of orderTotalID3 HTML elements and assign it to  orderTotalText3
  Total=Total-SDLCBookPrice;
  //Substract the price of the above removed item from the total (Total) This is used for calculate the expected result and match it with actual result.
  textTotal=String(Total);
  //Converts the updated Total value to a string and asign it to texttotal.
  console.log("Expected Value after Remove 2nd item:", textTotal);
  //Prints the retrieved order total.
  console.log("Actual Value after Remove 2nd item:", orderTotalText3);
  //Prints the converted value on the console.
  await expect(orderTotalID3).toContainText(textTotal);
  //Verifying that actual result matches the expected result.



  //--Remove Remainig item from the cart
  await page.getByRole('link', { name: 'Remove' }).nth(0).click();
  //Finds the remaining (1st) link with the role 'Remove' and clicks on it, Using that action remove the remaining item from the cart.
  Total=Total-testingBookPrice;
  console.log("Expected Value after Remove remaining item:", Total ,"(Empty)");



  //--Check Emptyness of Cart
  const ShopingCartMsg = '//*[@class="commerce-no-items-message"]';
  //This line declares a constant variable named ShopingCartMsg and assigns it a value using Xpath.
  await expect(page.locator(ShopingCartMsg)).toHaveText("You have not added any items to your shopping cart.");
  //This line checks a web page message indicates a empty shopping cart.


});




