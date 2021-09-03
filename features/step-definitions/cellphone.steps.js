import { Given, When, Then } from '@cucumber/cucumber';

import CellPhone from '../pageobjects/cellphone';

When(
  /^Cell Phones & Smartphones in the left hand side navigation section$/,
  async () => {
    await CellPhone.clickCellPhonesSmartphones();
  }
);

When(/^I click - More$/, async () => {
  await CellPhone.clickAllFilter();
});

When(/^I click - apply$/, async () => {
  await CellPhone.clickApply();
});

When(/^I filter (.*)$/, async (message) => {
  await CellPhone.clickFilter(message);
});

When(/^I choose location items at (.*)$/, async (message) => {
  await CellPhone.chooseLocationItems(message);
});

When(/^I choose screen size (.*)$/, async (message) => {
  await CellPhone.chooseScreenSize(message);
});

When(/^I input max price (.*)$/, async (message) => {
  await CellPhone.inputMaxPrice(message);
});

When(/^(.*) is applied$/, async (message) => {
  await CellPhone.isApplied(message);
});

When(/^I click applied filter button$/, async () => {
  await CellPhone.clickAppliedFilter();
});

When(
  /^I see the counting tags are applied that equals with (.*)$/,
  async (message) => {
    await CellPhone.verifyAppliedFilterInteger(message);
  }
);
