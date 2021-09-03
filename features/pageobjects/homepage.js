import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Homepage extends Page {
  /**
   * define selectors using getter methods
   */
  get btnSubmit() {
    return $('button[type="submit"]');
  }

  get btnSearchCategory() {
    return $('//button[text()="Shop by category"]');
  }

  get btnCategory() {
    return $('[aria-label="Select a category for search"]');
  }
  categoriesOption(word){
    return $( `//*[contains(.," Computers/Tablets")]`);
  }

  get btnSearch(){
    return $('[class="btn btn-prim gh-spr"]')
  }

  get btnCellphone() {
    return $(
      '[class="scnd"][href="https://www.ebay.com/b/Cell-Phones-Smart-Watches-Accessories/15032/bn_1865441"]'
    );
  }
  get fieldSearch() {
    return $('input#gh-ac');
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async searchWord(word) {
    await super.inputEventValue(this.fieldSearch, word);
  }

  async clickSearchByCategory() {
    await super.isDisplayed(this.btnSearchCategory);
    await super.clickElement(this.btnSearchCategory);
  }


  async clickSearch() {
    await super.isDisplayed(this.btnSearch);
    await super.clickElement(this.btnSearch);
  }

  async clickCategory() {
    await super.isDisplayed(this.btnCategory);
    await super.clickElement(this.btnCategory);
  }

  async chooseCategory(word) {
    let text= await this.btnCategory;
    await text.selectByVisibleText(word)
  }

  async searchCategory(word) {
    await super.isDisplayed(this.categoriesOption(word));
    await super.clickElement(this.categoriesOption(word));
  }

  async clickCellPhone() {
    await super.isDisplayed(this.btnCellphone);
    await super.clickElement(this.btnCellphone);
  }

  /**
   * overwrite specifc options to adapt it to page object
   */
  openEbay() {
    return super.openPage('www.ebay.com');
  }
}

export default new Homepage();
