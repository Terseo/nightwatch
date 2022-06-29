module.exports = {
    'Test1: Validate filter text developer guide': function (browser) {
        var nightwatch = browser.page.landingpage();

        nightwatch
            .navigate()
            .filterTextDevGuide()
            .selectFirstElement()
        browser.end();
    }
}