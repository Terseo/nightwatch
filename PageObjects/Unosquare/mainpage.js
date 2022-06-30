const { title } = require('process');

var validateContactUs = {
    contactUnosquare: function () {
        this.api.pause(1000);
        const form = getData(); // this is the important part
        return this.waitForElementVisible('@contactusMenu', 1000)
            .click('@contactusMenu')
            .setValue('@companyTextField', form.company)
            .setValue('@phoneTextField', form.phone)
            .setValue('@messageTextArea', form.message)
            .click('@submitBtn')
            .waitForElementVisible('@nameWarningMsg')
    }
};

var validateServicePage = {
    serviceUnosquare: function () {
        this.api.pause(1000);
        return this.waitForElementVisible('@servicesMenu', 1000)
            .click('@servicesMenu')
            .waitForElementVisible('@servicesLabel')
            .assert.containsText('@servicesLabel', "AGILE SOFTWARE DEVELOPMENT")
    }
};

var openBlogPage = {
    openBlogPageUnosquare: function () {
        this.api.pause(1000);
        return this.waitForElementVisible('body', 1000)
            .click('@blogMenu')
            
    }
};

var validateUrlAndHeader = {
    validateUrlAndHeader: function () {
        this.assert.urlContains('https://blog.unosquare.com/')
            .getTitle(function (title) {
                this.assert.equal(title, 'Software Development Blog | Digital Transformation Blog')
            })
    }
};

var validateRecentAndPopularPost = {
    validateRecentAndPopularPost: function () {
        this.api.pause(1000);
        return this.waitForElementVisible('body', 1000)
            .assert.visible('@recentPost')
            .assert.visible('@popularPost')
    }
};
var validateFilterBlogPage = {
    validateFilterNames: function (name) {
        this.api.pause(1000);
        var search = getSearchValues();
        return this.waitForElementVisible('body', 4000)
            .setValue('@searchBar', search[name])
            .click('@searchButton')
            .assert.containsText('@contentBlog', search[name])
    }
};

var validateAboutPage = {
    validateAboutPageUnosquare: function () {
        this.api.pause(1000);
        var name = getAssertNames();
        return this.waitForElementVisible('@servicesMenu', 1000)
            .click('@aboutMenu')
            .waitForElementVisible('body')
            .assert.containsText('@labelName', name.mario)
            .assert.containsText('@labelName', name.giancarlo)
            .assert.containsText('@labelName', name.eduardo)
            .assert.containsText('@labelName', name.ignacion)
            .assert.containsText('@labelName', name.diego)
    }
};

function getData() {
    return require('../../dataExternal/unosquareForm.json'); 
};

function getSearchValues() {
    return require('../../dataExternal/searchValues.json'); 
};

function getAssertNames() {
    return require('../../dataExternal/assertNames.json'); 
};

module.exports = {
    url: 'https://www.unosquare.com',
    commands: [validateContactUs, validateServicePage, openBlogPage, validateFilterBlogPage, validateAboutPage,
               validateUrlAndHeader, validateRecentAndPopularPost],
    elements: {
        contactusMenu: {
            selector: "li a[href = '/ContactUs']"
        },
        industriesMenu: {
            selector: "li a[href = '/Industries']"
        },
        aboutMenu: {
            selector: "li a[href = '/About']"
        },
        servicesMenu: {
            selector: "li a[href = '/Services']"
          },
        blogMenu: {
            selector: "//*[@id='navbarSupportedContent']/ul/li[8]/a",
            locateStrategy: 'xpath'
        },
        servicesLabel: {
            selector: "[id='services']"
        },
        companyTextField: {
            selector: "input.hs-input[name = 'company']"
        },
        phoneTextField: {
            selector: "input.hs-input[name = 'phone']"
        },
        messageTextArea: {
            selector: "textarea.hs-input[name = 'message']"
        },
        submitBtn: {
            selector: "input[value = 'Submit']"
        },
        nameWarningMsg: {
            selector: "//div[contains(@class, 'hs_name')]//label[contains(., 'Please complete this required field.')]",
            locateStrategy: 'xpath'
        },
        labelName: {
            selector: "[class='leads']"
        },
        searchBar: {
            selector: "[name='query']"
        },
        searchButton: {
            selector: "[type='submit']"
        },
        contentBlog: {
            selector: "[class='container-fluid content-blog']"
        },
        recentPost: {
            selector: "[for='tab1']"
        },
        popularPost: {
            selector: "[for='tab2']"
        }
    }
}