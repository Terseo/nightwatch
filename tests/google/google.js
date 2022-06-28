module.exports = {
    'Demo test google': function (browser) {
      browser.init()
        .windowMaximize()
        .url('https://www.google..com')
        .waitForElementVisible('body')
        .end();
    }
  };
  