module.exports = {
    before: function (browser) {
    },

    'API Testing - GET APOD': function (browser) {
        var apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=oRPPmCKMYxYIYhCqfajKuuCvrI4qNtDJodke8Yct'
        browser.apiGet(apiUrl, function (response) {
            //var data = JSON.parse(response.body)
            console.log(response.body)
            browser.assert.equal(response.statusCode, '200')
            browser.assert.equal(response.body.copyright, 'Alexis Trigo')
            browser.assert.equal(response.body.media_type, 'image')
            browser.assert.equal(response.body.service_version, 'v1')
        })
    },

    'API Testing - GET EPIC': function (browser) {
        var apiUrl = 'https://api.nasa.gov/EPIC/api/natural/images?api_key=oRPPmCKMYxYIYhCqfajKuuCvrI4qNtDJodke8Yct'
        browser.apiGet(apiUrl, function (response) {
            //var data = JSON.parse(response.body)
            console.log(response.body)
            browser.assert.equal(response.statusCode, '200')
            browser.assert.equal(response.body[0].caption, "This image was taken by NASA's EPIC camera onboard the NOAA DSCOVR spacecraft")
            browser.assert.equal(response.body[0].image, 'epic_1b_20220628024727')
            browser.assert.equal(response.body[0].version, '03')
        })
    },

    'API Testing - GET NEO': function (browser) {
        var apiUrl = 'https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=oRPPmCKMYxYIYhCqfajKuuCvrI4qNtDJodke8Yct'
        browser.apiGet(apiUrl, function (response) {
            //var data = JSON.parse(response.body)
            console.log(response.body)
            browser.assert.equal(response.statusCode, '200')
            browser.assert.equal(response.body.near_earth_objects[0].neo_reference_id, "2000433")
            browser.assert.equal(response.body.page.total_pages, '1469')
            browser.assert.equal(response.body.near_earth_objects[0].name_limited, 'Eros')
        })
    },

    'API Testing - POST Users': function (browser) {
        var apiUrl = 'https://reqres.in/api/users'
        var postData = {'name':'QA CoE Name', 'job':'Unosquare QA'}
        browser.apiPost(apiUrl, postData, null, null, function (response) {
  
            browser.assert.equal(response.statusCode, '201')
            browser.assert.equal(response.body.name, 'QA CoE Name')
            browser.assert.equal(response.body.job, 'Unosquare QA')
        })
    },

    'API Testing - POST Register Unsuccessful': function (browser) {
        var apiUrl = 'https://reqres.in/api/register'
        var postData = {'email':'sydney@fife'}
        browser.apiPost(apiUrl, postData, null, null, function (response) {
  
            browser.assert.equal(response.statusCode, '400')
            browser.assert.equal(response.body.error, 'Missing password')
        })
    },

    'API Testing - GET Negative': function (browser) {
        var apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=oRPPmCKMYxYIYhCqfajKuuCvrI4qNtDJodke8Yct'
        browser.apiGet(apiUrl, function (response) {
            browser.assert.equal(response.statusCode, '200')
            browser.assert.equal(response.body.copyright, 'My Name')
        })
    }
};