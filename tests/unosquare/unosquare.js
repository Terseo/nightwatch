module.exports = {
    'test command in blog page': function (browser) {
        var unosquare = browser.page.mainpage();
        unosquare
            .navigate()
            .contactUnosquare();

        browser.end();
    },
    'test command in services page': function (browser) {
        var unosquare = browser.page.mainpage();
        unosquare
            .navigate()
            .serviceUnosquare();

        browser.end();
    }
}; 