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


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('have urls', function(){
            allFeeds.forEach(function(val){
                expect(val.url).toBeDefined();
                expect(val.url).not.toBe("");
            });
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('have names', function(){
            allFeeds.forEach(function(val){
                expect(val.name).toBeDefined();
                expect(val.name).not.toBe("");
            });
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The Menu', function() {

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('should be hidden by default', function(){
            var classList = document.getElementsByTagName('body')[0].className.split(/\s+/);
            expect(classList).toContain("menu-hidden");
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('should show or hide when the menu or an RSS feed is clicked', function(){
            //First we will click the Menu, and expect it to NOT be hidden.
            $('.menu-icon-link').click();
            var classList = document.getElementsByTagName('body')[0].className.split(/\s+/);
            expect(classList).not.toContain("menu-hidden");
            //Next we will select an RSS feed, in which case the menu should hide.
            $("a[data-id='1']").click();
            var classList = document.getElementsByTagName('body')[0].className.split(/\s+/);
            expect(classList).toContain("menu-hidden");
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        //before each test, run the loadFeed function, send in '0' to load the first the RSS feed. Then call the done()
        //function as a callback to allow the rest of the tests to run.
        beforeEach(function(done) {
            loadFeed(0,function(){
                done();
            });
        });

        it('should have at least one entry in the feed', function(done){
            //get all the elements that were loaded into the feed, and validate that length of that is not zero.
            expect($('.feed > .entry-link').length).not.toBe(0);
            done();
        });
    });


    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        var firstString;
        var secondString;

        beforeEach(function(done) {
            loadFeed(0,function(){
                done();
            });
        });

        it('should load initial item', function(done){
            //load the initial value from the first RSS feed, make sure it's defined
            firstString = $('.feed > .entry-link')[0].computedName;
            expect(firstString).toBeDefined();
            done();
        });

        describe('and should change when a new link is loaded', function(done) {
            //before the next function, load a new RSS feed.
            beforeEach(function(done) {
                loadFeed(1,function(){
                    done();
                });
            });

            it('and the items should be different', function(done){
                //get the new value of the first link, and make sure it's not the same as the first.
                secondString = $('.feed > .entry-link')[0].computedName;
                expect(firstString).not.toBe(secondString);
                done();
            });
        });
    });
}());
