
class Common {
    constructor(driver, webdriver){
        this.driver = driver;
        this.webdriver = webdriver;
    }

    async isVisible(element){
        return element.isDisplayed();
    }

    async getText(element){
        await this.driver.wait(this.webdriver.until.elementIsVisible(element));
        return element.getText();
    }

    async clickOn(element, waitCondition){
        await element.click();
        if(waitCondition){
            await this.driver.wait(this.webdriver.until.elementIsVisible(waitCondition));
        }
    }

    async getCurrentURL(){
        return this.driver.getCurrentUrl();
    }

    async getTitle(){
        return await this.driver.getTitle();
    }
}

module.exports = Common;