import { Given, When, Then, And } from '@cucumber/cucumber';

import LoginPage from '../pageobjects/login.page';
import Homepage from '../pageobjects/homepage';
import Page1 from '../pageobjects/page';
import LP from '../pageobjects/listProduct.page';

const pages = {
  login: LoginPage,
};

Given(/^Go to www.ebay.com$/, async () => {
  await Homepage.openPage('https://www.ebay.com/');
});

When(
  /^Navigate to Search by category > Electronics > Cell Phones & accessories$/,
  async () => {
    await Homepage.clickSearchByCategory();
    await Homepage.clickCellPhone();
  }
);

When(/^Type search (.*) in the search bar$/, async (word) => {
  await Homepage.searchWord(word);
});

When(/^Search category with (.*)$/, async (word) => {
  await Homepage.clickCategory();
  await Homepage.chooseCategory(word);
  await Homepage.clickSearch();
});

Then(/^User is at (.*) product list page$/, async (message) => {
  await LP.urlContains(message);
});

Then(/^(.*) nth is contain (.*)$/, async (index, message) => {
  await LP.productByIndexIsContainText(index, message);
});
