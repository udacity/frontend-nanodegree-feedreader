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


        /* This test loops through each feed in the allFeeds
         * object and ensures it has a URL defined and that
         * the URL is not empty.
         */

         it('url defined and not empty', function() {
            allFeeds.forEach(function (element) {
                expect(element.url).toBeDefined();
                expect(element.url).not.toBe('');
                expect(element.url).not.toBeNull();
            })
         });


        /* This test loops through each feed in the allFeeds
         * object and ensures it has a name defined and that
         * the name is not empty.
         */
        it('name defined and not empty', function() {
            allFeeds.forEach(function (element) {
                expect(element.name).toBeDefined();
                expect(element.name).not.toBe('');
            })
        });
    });


    /* Second test suite, "The menu" */
    describe('The menu', function() {
        /* This test ensures the menu element is hidden by
         * default.
         */
        it('element menu hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        })
         /* This test ensures the menu changes visibility
          * when the menu icon is clicked. This test check
          * two events: does the menu display when clicked
          * and does it hide when clicked again.
          */

        it('menu visibility changes on click', function() {
            //click to show menu
            $('.menu').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
            //click to hide menu
            $('.menu').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);

          });

    });
    /* Third test suite, "Initial Entries" */
    describe('Initial Entries', function() {
        /* This test ensures that when the loadFeed function is called
         * and completes its work, there is at least a single .entry
         * element within the .feed container.
         */
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('feed contains entries', function(done){
            expect($('.feed').find('.entry').length).toBeGreaterThan(0);
            done();
        });

    });
    /* Fourth test suite, "New Feed Selection" */
    describe('New Feed Selection', function(){
        /* This test ensures when a new feed is loaded by the
         * loadFeed function that the content actually changes.
         */
         // boolean value indicating whether dom has been changed;
      var isChanged;

      beforeEach(function(done) {

        isChanged = false;

        // listen to DOM changes in .feed element
        $('.feed').on('DOMSubtreeModified', function() {
            isChanged = true;
        });

        loadFeed(1, done);

      });

      it('feed content changes', function(done){
        expect(isChanged).toBeTruthy();
        done();
      });
    });
}());
