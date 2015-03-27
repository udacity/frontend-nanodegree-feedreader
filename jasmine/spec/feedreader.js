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

        it('every allFeeds object has a non-empty url property.', function() {
            for (var i = 0, len = allFeeds.length; i < len; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toBe('');
            }
        });

        it('every allFeeds object has a non-empty name property.', function() {
            for (var i = 0, len = allFeeds.length; i < len; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toBe('');
            }
        });
    });

    describe('The menu', function() {
        var fontsize=parseInt($('body').css('font-size'));
        var translate=0-fontsize*12;
    	it('menu is hidden by default', function() {
    		expect(parseInt($('.hidden').css('transform').split(',')[4])).toBe(translate);});
        it('should show/disappear when click toggle', function(done) {
            $(".menu-icon-link").click();
            setTimeout(function () {
                expect(parseInt($(".hidden").css('transform').split(',')[4])).toBe(0);
                $(".menu-icon-link").click();
                setTimeout(function () {
                    expect(parseInt($(".hidden").css('transform').split(',')[4])).toBe(translate);
                    done();
                },1000);

            },1000);

    });});

    /* TODO: Write a new test suite named "The menu" */

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

    describe('Initial Entries', function() {
        beforeEach(function (done) {
            loadFeed(0);
            done();
        });

        it('the content is not empty after intial load', function() {
           expect($(".feed").children().length).not.toBe(0);
    	});

    });

    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    describe('New Feed Selection', function() {
        var results;
        var fetchFeeds=function(j,done){
            loadFeed(j, function () {
                results.push($(".feed").html());
                if (j === len - 1) {
                    done();
                }
            });
        };
        beforeEach(function (done) {
            results=[];
            results.push('');
            for (var i = 0, len = allFeeds.length; i < len; i++) {
               fetchFeeds(i,done);
            }
        });

    var createSpecs=function(j){
        it('feed results should be different everytime it loads ', function(done) {
            expect(results[j]).not.toEqual(results[j+1]);

            done();
        });};

        for (var i = 0, len = allFeeds.length; i < len; i++) {
            createSpecs(i);
        }
    });
    
    /* TODO: Write a new test suite named "New Feed Selection"
    
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
