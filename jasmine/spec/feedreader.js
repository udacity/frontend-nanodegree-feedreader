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
        it('url is defined and is not empty' , function(){
            for(i in allFeeds){
                //for the url to be defined
                expect(allFeeds[i].url).toBeDefined();
                //for the url not to be empty
                expect(allFeeds[i].url).not.toBe('')
            }
        })
        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('name of the feed is defined and its not empty' , function(){
            for(i in allFeeds){
                //for the url to be defined
                expect(allFeeds[i].name).toBeDefined();
                //for the url not to be empty
                expect(allFeeds[i].name).not.toBe('')
            }
        })

    });


    /* TODO: Write a new test suite named "The menu" */
         
    describe('the menu' , function(){
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('slide menu is hidden by default' , function(){
            //the slide menu is hidden when the class is 'menu-hidden'
            expect(document.getElementsByTagName('body')[0].className).toBe('menu-hidden')
        });

        /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('it should ensure that when the menu icon is clicked the class toggles' , function(){
            $('.menu-icon-link').trigger('click');
            expect(document.getElementsByTagName('body')[0].className).toBe('');
            $('.menu-icon-link').trigger('click');
            expect(document.getElementsByTagName('body')[0].className).toBe('menu-hidden');

        })


    })
    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
    describe('Initial Entries' , function(){
        var feedContainer = $('.feed');
        beforeEach(function(done){
            loadFeed(0, done);
        });
        it('loads at least a single entry within the feed container', function(){
            expect(feedContainer.find('.entry').length).toBeGreaterThan(0);
            //done();
        });

    })

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

    describe('new feed Selection' , function(){

        var initialFirstEntry;
        beforeEach(function(done){
            loadFeed(1, function(){
                initialFirstEntry = $('.entry').first().text();
                loadFeed(2, done);
            });
        });

        afterEach(function(done){
            loadFeed(0, done);
        });
        
        it('changes the content, that is, the list of articles', function(done){
            var updatedFirstEntry;
            expect(initialFirstEntry).toBeDefined();

            updatedFirstEntry = $('.entry').first().text();
            expect(updatedFirstEntry).toBeDefined();

            expect(updatedFirstEntry).not.toBe(initialFirstEntry);
            done();
        });

    })
}());
