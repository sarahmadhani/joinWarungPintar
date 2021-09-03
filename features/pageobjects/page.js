/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class Page {
  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */
  open(path) {
    return browser.url(`https://the-internet.herokuapp.com/${path}`);
  }

  openPage(urlPage) {
    return browser.url(urlPage);
  }

  isContainText(element, value) {
    return expect(element).toHaveTextContaining(value);
  }

  isContainUrl(value) {
    let url = browser.getUrl();
    return expect(url).toHaveTextContaining(value);
  }

  elementScrollIntoView(element){
    return element.scrollIntoView()
  }

  inputEventValue(element, value) {
    return element.setValue(value);
  }

  isDisplayed(element) {
    return expect(element).toBeDisplayed();
  }
  getTextElement(element) {
    return element.getText();
  }
  getValueElement(element) {
    return element.getText();
  }

  clickElement(element) {
    return element.click();
  }
  clickViaInject(elementSelector) {
    browser.execute(
      function (selector) {
        document.querySelector(selector).click();
      },
      [elementSelector]
    );
  }
}
