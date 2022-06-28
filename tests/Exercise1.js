describe('API/UI Automation', function () {

    it('Go to Nightwatch page', function (browser) {
        browser
            .url('https://nightwatchjs.org/')
            .waitForElementVisible('body', 2000)
            .assert.containsText('[class="col-md-6"]', "Nightwatch")

    });
    it('Go to Developer Guide instead of Gettting Started', function (browser) {
        browser
            .useXpath()
            .click('//*[@id="navigation"]/ul/li[2]/a')

            .useCss()
            .assert.containsText('[id="why-choose-nightwatch-"]', "Why choose Nightwatch?")
            .assert.elementPresent('[placeholder="Filter by title"]')

    });
    it('Use Search Bar and select firt result', function (browser) {
        browser
            .setValue('[placeholder="Filter by title"]', 'Asserts')

            .useXpath()
            .click('//*[@id="guide-container"]/div/div/div/div[1]/div[1]/ul/li[1]/a')

            .useCss()
            .assert.not.elementPresent('h1[class="col-md-6"]')
            .assert.elementPresent('[id="-assert"]')


    });
    it('Check API Reference Exist in header ', function (browser) {
        browser
            .assert.attributeContains("li a[href = '/api/']", 'href', 'a')
            .assert.containsText("li a[href = '/api/']", "API Reference")


    });
    it('Go to Blog page', function (browser) {
        browser
            .useXpath()
            .click('//*[@id="navbartop"]/ul/li[5]/a')
            .assert.not.urlContains('https://nightwatchjs.org/guide/overview/what-is-nightwatch.html')
            .assert.urlContains('https://nightwatchjs.org/blog/')
    });
    it('Scrolldown and validate message', function (browser) {
        browser
            .execute('scrollTo(0,5000)')

            // Using this because after to scroll page load the last block of 
            // content and moving the focus for the validation
            .useCss()
            .keys(browser.Keys.END)

            .assert.containsText('[class="address"]', "Nightwatch.js was initially created in Oslo, Norway by ")
            .assert.containsText('[class="address"]', " – an independent software consultancy; it is now being maintained at ")
            .assert.containsText('[class="address"]', " with help from all ")
            .assert.containsText('[class="address"]', "Pineview.io")
            .assert.containsText('[class="address"]', "BrowserStack")
            .assert.containsText('[class="address"]', "our contributors")
        browser.end();
    });
});
