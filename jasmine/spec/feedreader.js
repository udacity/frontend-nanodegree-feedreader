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
        /* it tests to make sure that the
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

/*        The following test  loops through each feed in the allFeeds
        object and ensures it has a URL defined and that the URL is not empty.*/

        it('every allFeeds object has a non-empty url property.', function() {
            for (var i = 0, len = allFeeds.length; i < len; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toBe('');
            }
        });
        /* The following test  loops through each feed in the allFeeds
         object and ensures it has a name defined and that the name is not empty.*/
        it('every allFeeds object has a non-empty name property.', function() {
            for (var i = 0, len = allFeeds.length; i < len; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toBe('');
            }
        });
    });

    describe('The menu', function() {
        /* this test is to make sure that the menus is hidden and changes visibility when the menu icon is clicked */

        /*because the menus is hidden by being translated out of the page,
        * and the translated distance is defined by em, so we have to get the font size of the page and then convert em into px*/
        var fontsize=parseInt($('body').css('font-size'));
        var translate=0-fontsize*12;
    	it('menu is hidden by default', function() {
    		expect(parseInt($('.hidden').css('transform').split(',')[4])).toBe(translate);});/*css transform value is saved as a matrix, it is a little tricky to get them and make sure they equal to the translated distance we calculated early*/

        it('should show/disappear when click toggle', function(done) {//test the menu's visibility is toggled when when the menu-icon is clicked
            $(".menu-icon-link").click();//first click the icon
            setTimeout(function () {//we have to wait for some time to test the visibility, because the css transforming takes time.
                expect(parseInt($(".hidden").css('transform').split(',')[4])).toBe(0);
                $(".menu-icon-link").click();//click it again, to test the menus will slide of the page
                setTimeout(function () {
                    expect(parseInt($(".hidden").css('transform').split(',')[4])).toBe(translate);
                    done();//use done()because the we use "set timeout", it will be carried out asynchronously.
                },500);

            },500);

    });});


    /*test the entries is not empty after the initial load*/
    describe('Initial Entries', function() {
        beforeEach(function (done) {//make the ajax call load the feed,
            loadFeed(0);
            done();
        });

        it('the content is not empty after intial load', function() {
           expect($(".feed").children().length).not.toBe(0);//make sure the feed has children nodes
    	});

    });


    /*test when a new feed is loaded
     * by the loadFeed function that the content actually changes.*/
    describe('New Feed Selection', function() {
        var results;// the array saves the content of each feed

        var fetchFeeds=function(j,done){
            loadFeed(j, function () {
                results.push($(".feed").html());
                if (j === len - 1) {//signal done when reach the last feed
                    done();
                }
            });
        };
        beforeEach(function (done) {
            results=[];
            results.push('');//before initial loading, the first result is empty
            for (var i = 0, len = allFeeds.length; i < len; i++) {//fetch the content of each feed and push to the results;
               fetchFeeds(i,done);
            }
        });

    var createSpecs=function(j){
        it('feed results should be different everytime it loads ', function() {/*test if each result in the array is different than the next one. Technically,we should examine if every result is different than any of the remaining results, which is more complicated and not necessary.*/
            expect(results[j]).not.toEqual(results[j+1]);

        });};

        for (var i = 0, len = allFeeds.length; i < len; i++) {
            createSpecs(i);//loop through the results array to do the comparison
        }
    });
    

}());
