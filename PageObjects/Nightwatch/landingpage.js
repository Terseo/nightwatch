var validateSearch = {
    filterTextDevGuide: function() {
      this.api.pause(1000);
      return this.waitForElementVisible('body', 1000)
        .click('@devGuide')
        .setValue('@filterText', 'Asserts')
    }
};

var selectFirstElement = {
    selectFirstElement: function() {
        this
        .click('@firstElement')
        .assert.elementPresent('@assertLabel')
    }
};

module.exports = {
    url: 'https://nightwatchjs.org/',
    commands: [validateSearch, selectFirstElement],
    elements: {
      devGuide: {
        selector: '//*[@id="navigation"]/ul/li[2]/a',
        locateStrategy: 'xpath'
      },
      firstElement: {
        selector: '//*[@id="guide-container"]/div/div/div/div[1]/div[1]/ul/li[1]/a',
        locateStrategy: 'xpath'
      },
      assertLabel: {
        selector: '[id="-assert"]'
      },
      codeImage: {
        selector: 'img[class="code-top"]'
      },
      nightTitle: {
        selector: 'h1[class="col-md-6"]'
      },
      filterText: {
        selector: '[placeholder="Filter by title"]'
      }
    }
  };