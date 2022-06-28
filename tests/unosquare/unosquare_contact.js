module.exports = {
    'Demo test unosquare Contact': function (browser) {
      browser.init()
        .windowMaximize()
        .url('https://www.unosquare.com')
        .waitForElementVisible('body')
        .click("li a[href = '/ContactUs']")
        .end();
    }
  };
  