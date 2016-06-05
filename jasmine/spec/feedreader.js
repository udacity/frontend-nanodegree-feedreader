/* feedreader.js
 * 
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('all urls are defind', function() {
            allFeeds.forEach(function(feed,i) {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe('');
            });
        });

        /* Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('all names are defind', function() {
             allFeeds.forEach(function(feed,i) {
                 expect(feed.name).toBeDefined();
                 expect(feed.name).not.toBe('');
             });
        });
     });


    /* Write a new test suite named "The menu" */

        /* Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

         /* Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

    /* A test suite for the menu */
    describe('The menu', function() {

        // a test that ensures the menu element is hidden by default. 
        it('hidden by default', function() {
            // the menu is hidden via toggling the "menu-hidden" class
            // so check that the class is present by default
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        // a test that ensures the menu changes
        // visibility when the menu icon is clicked. 

        it('visibility toggles', function() {
            // ensure we are starting with the menu hidden
            expect($('body').hasClass('menu-hidden')).toBe(true);
            // trigger a menu click
            $('.menu-icon-link').trigger('click');
            // ensure the menu was shown
            expect($('body').hasClass('menu-hidden')).toBe(false);
            // trigger a second menu click
            $('.menu-icon-link').trigger('click');
            // ensure the menu was hidden again
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });


    /* Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    describe('Initial Entries', function() {
        // a test that ensures when the loadFeed
        // function is called and completes its work, there is at least
        // a single .entry element within the .feed container.

        // if there is at least one valid feed, queue it to be loaded and call
        // done once it has returned from the asynchronous call
        beforeEach(function(done) {
            if(allFeeds.length > 0) {
                loadFeed(0, done);  
            }
        });

        // ensure there was at least one valid feed and that the load has
        // resulted in a least one entry to be placed in the .feed container
        it("loads data", function() {
            expect(allFeeds.length > 0).toBe(true);
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });

    /* Write a new test suite named "New Feed Selection"

        /* Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
    /* Additional testing - a test suite for user-added feeds */
    
    describe('New Feed Selection', function() {
        /**
            Test that the content in fact changes when a new feed is loaded
            by the loadFeed function.
        */
        var feedLen = allFeeds.length;
        var $headerTitle = $('.header-title');
        var initialTitle, newTitle;
        beforeEach(function(done) {
            if (feedLen < 2) throw 'Not enough feeds to compare';

            loadFeed(0, function() {
                initialTitle = $headerTitle.html();
                loadFeed(feedLen - 1, function() {
                    newTitle = $headerTitle.html();
                    done();
                });
            });
        });

        it('loads new entries', function(done) {
            expect(newTitle).not.toBe(initialTitle);
            // reload default feed
            loadFeed(0, done);
        });
    });

}());
