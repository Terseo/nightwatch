module.exports = {
    'Demo test unosquare': function (browser) {
      browser.init()
        .windowMaximize()
        .url('https://www.unosquare.com')
        .waitForElementVisible('body')
        .end();
    }
  };
  