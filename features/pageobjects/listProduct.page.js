import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ListProduct extends Page {

    labelProductByIndex(index) {
        return $(`//*[@id="srp-river-results"]/ul/li[${index}]/div/div[2]/a/h3/span`);
      }
    
    async urlContains (isUrl) {
        let url = await  browser.getUrl();
        super.isContainText(url, isUrl)
    }

    productByIndexIsContainText (index, text) {
        super.isContainText(this.labelProductByIndex(index), text)
    }


}

export default new ListProduct();
