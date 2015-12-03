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

        beforeEach(function () {
            jasmine.addMatchers({//here I customize a matcher to test if all the objects in one array contains certain non-empty attributes, this matcher will be used to test non-empty names
                toHaveNonEmpty: function () {
                    return {
                        compare: function (actual, expected) {
                            var result={};
                            for (var i = 0, len = actual.length; i < len; i++) {
                                if(typeof actual[i][expected]==="string"||actual[i][expected].length>0){
                            continue;
                      }else{
                              result.pass=false;
                              result.message="there is  empty properties";
                              return result;
                                }
                            }
                          result.pass=true;
                          result.message="there is no empty properties";
                          return result;
                        }
                    };
                }
            });
        });

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).toBeGreaterThan(0);//a more strict comparison

        });

/*        The following test  loops through each feed in the allFeeds
        object and ensures it has a URL defined and that the URL is not empty.*/

        it('every allFeeds object has a non-empty url property.', function() {
            for (var i = 0, len = allFeeds.length; i < len; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).toMatch(/^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/);//I add a regex to test thery are truly url links.
            }
        });
        /* The following test  loops through each feed in the allFeeds
         object and ensures it has a name defined and that the name is not empty.*/
        it('every allFeeds object has a non-empty name property.', function() {
            expect(allFeeds).toHaveNonEmpty('name');//the customized matcher
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
            loadFeed(0,function(){
              done();});
        });

        it('the content is not empty after intial load', function() {
           expect($(".feed").children().length).toBeGreaterThan(0);//make sure the feed has children nodes
    	});

    });


    function testResult (i) { //refactor the function because use asynchronous call in loop is dangerous:scope issues
      it('feed results should be different everytime it loads ', function (done) {/*test if each result in the array is different than the next one.*/

        loadFeed(i, function () {
            var before=$(".feed").html();
          loadFeed(i + 1, function () {
            var after = $(".feed").html();
            expect(before).not.toEqual(after);
            done();
          });
        });
      });
    }

    /*test when a new feed is loaded
     * by the loadFeed function that the content actually changes.*/
    describe('New Feed Selection', function() {

        for (var i = 0, len = allFeeds.length-1; i < len; i++) {

          testResult(i);
            //loop through the results array to do the comparison
        }
    });
}());
