module.exports = {
    'Test1: Validate img is loaded in page': function (browser) {
        var nightwatch = browser.page.landingpage();

        nightwatch
            .navigate()
            .waitForElementVisible('body')
            .click('@codeImage')
            .assert.not.elementPresent('@nightTitle')
        browser.end();
    }
}