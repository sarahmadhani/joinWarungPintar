import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CellPhone extends Page {
  /**
   * define selectors using getter methods
   */
  get btnCellPhonesSmartphones() {
    return $(
      '//h2[text()="Shop by Category"]/ancestor::div[@class="dialog__cell"]/child::section//a[text()="Cell Phones & Smartphones"]'
    );
  }
  get btnAllFilter() {
    return $('[aria-label="All Filters"]');
  }
  get btnApply() {
    return $('//button[text()="Apply"]');
  }
  get fieldMaxPrice() {
    return $('input[aria-label="Maximum Value, US Dollar"]');
  }

  get appliedFilter(){
    return $('li[class="brm__carousel-item brm__carousel-item--applied"] [class="brm__flyout__btn-label"]')
  }
  btnFilter(message) {
    return $(`//*[@role="tab"]/span[text()="${message}"]`);
  }
  filterApplied(message) {
    return $(`//li[@class="brm__aspect-item brm__aspect-item--applied"]//span[text()="${message}"]`);
  }
  screenSize(message) {
    return $(`//*[text()="${message}"]/preceding-sibling::input`);
  }
  locationItem(message) {
    return $(`//input[@type="radio"]/following-sibling::span[text()="${message}"]`)
  }
  async clickCellPhonesSmartphones() {
    await super.isDisplayed(this.btnCellPhonesSmartphones);
    await super.clickElement(this.btnCellPhonesSmartphones);
  }

  async clickAllFilter() {
    await super.isDisplayed(this.btnAllFilter);
    await super.clickElement(this.btnAllFilter);
  }

  async clickApply() {
    await super.isDisplayed(this.btnApply);
    await super.clickElement(this.btnApply);
  }

  async inputMaxPrice(message) {
    await super.elementScrollIntoView(this.fieldMaxPrice);
    await super.clickElement(this.fieldMaxPrice);
    await super.inputEventValue(this.fieldMaxPrice, message);
  }

  async verifyAppliedFilterInteger(message){
    await super.elementScrollIntoView(this.fieldMaxPrice);
    await super.isContainText(this.appliedFilter, message);
  }

  async isApplied(message){
    await super.elementScrollIntoView(this.filterApplied(message));
    await super.isDisplayed(this.filterApplied(message));
  }


  async clickAppliedFilter(){
    await super.elementScrollIntoView(this.appliedFilter);
    await super.clickElement(this.appliedFilter);
  }

  async clickFilter(message) {
    await super.elementScrollIntoView(this.btnFilter(message));
    await super.clickElement(this.btnFilter(message));
  }

  async chooseScreenSize(message) {
    await super.elementScrollIntoView(this.screenSize(message));
    await super.clickElement(this.screenSize(message));
  }

  async chooseLocationItems(message) {
    await super.elementScrollIntoView(this.locationItem(message));
    await super.clickElement(this.locationItem(message));
  }

  openEbay() {
    return super.openPage('www.ebay.com');
  }
}

export default new CellPhone();
