//MAIN FUNCTION TO WRAP ALL TESTING SUITES ENSURING ALL ELEMENTS ARE DOM READY
//feedreader.js

$(function() {    
    // 'RSS Feeds' test suite
    describe('RSS Feeds', function() {

        // test for content in allFeeds array
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        //loop over each feed and test for object's property 'URL'
        //content and length, to make sure every feed entry has a URL

        it('should have URL defined for each feed', function() {
            /*for(feed of allFeeds) {
                expect(feed.url).toBeDefined;
                expect(feed.url).not.toBe(0);
            }*/
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });

        //loop over each feed and test for object's property 'name' content and length, to make sure every feed entry has a name

         it('should have name defined for each feed', function() {
            /*for(feed of allFeeds) {
                expect(feed.name).toBeDefined;
                expect(feed.name).not.toBe(0);
            }*/
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
         });
    });


    // 'The menu' test suite
    describe('The menu', function() {
        const body = document.querySelector('body');

        // test menu element for default hiding behavior
         it('is hidden by default', function() {
            expect(body.classList.contains('menu-hidden')).toBe(true);
         });

         //test menu icon for visibility status toggle on menu element, when clicked
          it('icon toggles open/close when clicked', function() {
            const menuIconLink = document.querySelector('.menu-icon-link');
            //Set reference point for test: define initial click and check if
            //menu is hidden (does not contain respective class)
            menuIconLink.click();
            expect(body.classList.contains('menu-hidden')).not.toBe(true);
            //Set opposite reference point for test: define second click and
            //check if menu is showing (has respective class)
            menuIconLink.click();
            expect(body.classList.contains('menu-hidden')).toBe(true);
          });
    });

    // 'Initial Entries' test suite
    describe('Initial Entries', function() {

        //test call on loadFeed function, assuring that has at least one entry
        //in feed container at any given time (length !== 0)

        //loadFeed() is an asynchronous function

         beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
         });

         it('are not empty', function() {
            let entries = document.querySelector('.feed .entry');
            expect(entries.length).toBeGreaterThan(0);
         });
    });

    // 'New Feed Selection' test suite

    describe('New Feed Selection', function() {

        /*test call on loadFeed() function, grabbing each feed element's HTML to later check equality on both, assuring that whenever a new feed object is called, content changes*/

        // simulated two calls on LoadFeed() using nested callback function on first call

        // loadFeed() is an asynchronous function

        /*Set initial reference point for test: initial feed load against checking of feed element's HTML*/
         beforeEach(function(done) {
            let feed = document.querySelector('.feed');

            loadFeed(1, function() {
                firstFeed = feed.html();
        //Set second reference point for test: nested callback function to check second feed element's HTML
                loadFeed(0, function() {
                    secondFeed = feed.html();
                    done();
                });
            });

         //Check equality on first and second feed element's HTML; expect it to be different
         it('loads and returns different entries', function() {
            expect(firstFeed).not.toBe(secondFeed);
         });
    });
         
}());