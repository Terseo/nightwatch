module.exports = {
    'Test1: Validate Contact Us have the correct Text': function (browser) {
        var unosquare = browser.page.mainpage();

        unosquare
            .navigate()
            .waitForElementVisible('@contactusMenu')
            .assert.containsText('@contactusMenu', "CONTACT US")
        browser.end();
    },

    'Test2: Validate Industries url': function (browser) {
        var unosquare = browser.page.mainpage();

        unosquare
            .navigate()
            .waitForElementVisible('@industriesMenu')
            .click('@industriesMenu')
            .assert.urlEquals('https://www.unosquare.com/Industries')
        browser.end();
    },

    'Test3: Validate that is possible set a value in contact us form': function (browser) {
        var unosquare = browser.page.mainpage();

        unosquare
            .navigate()
            .waitForElementVisible('@aboutMenu')
            .click('@contactusMenu')
            .setValue('@contactForm', 'Automation')
            .assert.containsText('@contactForm', 'Test Fail')

        browser.end();
    }
}