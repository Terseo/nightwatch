module.exports = {
    'Demo test unosquare': function (browser) {
        browser
            .windowMaximize()
            .url('https://www.unosquare.com')
            .waitForElementVisible('body')
            .verify.visible('xxxx')
            .url('https://www.google.com')
            .waitForElementVisible('body')
            .assert.visible('.non_existing')
            .url('https://www.amazon.com')
            .end();
    }
};
