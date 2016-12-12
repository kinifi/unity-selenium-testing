var assert = require('assert');
var fs = require('fs');

describe('Unity Asset Store Page', function() {
    it('Asset Store SC & Title Check', function () {
        browser.url('http://unity3d.com');
        var title = browser.getTitle();
        assert.equal(title, 'Unity - Game Engine');
        browser.click('#main-header > div > div.main-navigation.clear > ul > li.menu-366');

        browser.waitUntil(function ()
        {
          return browser.getTitle() === 'Asset Store'
        }, 15000, 'Expected to be on the Asset Store page');

        //take a screenshot of the asset store page
        var screenshot = browser.saveScreenshot(); // returns base64 string buffer
        fs.writeFileSync('./myShort.png', screenshot)
        // save screenshot to file and receive as Buffer
        screenshot = browser.saveScreenshot('./snapshot.png');

        assert.equal(title, 'Unity - Game Engine');
        console.log("Finished Tests");

    });
});
