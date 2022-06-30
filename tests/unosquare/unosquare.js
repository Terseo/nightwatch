module.exports = {

    'test1: open unosquare': function (browser) {
        var unosquare = browser.page.mainpage();
        unosquare
            .navigate()
    },

    'test2: open about page': function (browser) {
        var unosquare = browser.page.mainpage();
        unosquare
            .openBlogPageUnosquare()
    },

    'test3: validate url and header name': function (browser) {
        var unosquare = browser.page.mainpage();
        unosquare
            .validateUrlAndHeader()
    },

    'test4: validate recent and popular post are visible': function (browser) {
        var unosquare = browser.page.mainpage();
        unosquare
            .validateRecentAndPopularPost()
    },

    'test5: blog page with external data': function (browser) {
        var unosquare = browser.page.mainpage();
        unosquare
            .validateFilterNames("qa")
            .validateFilterNames("development")
            .validateFilterNames("java")
            .validateFilterNames("testing")
    },

    'test6: about page with external data': function (browser) {
        var unosquare = browser.page.mainpage();
        unosquare
            .navigate()
            .validateAboutPageUnosquare()
    }
    
}; 