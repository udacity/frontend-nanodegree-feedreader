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

    // Test to see if feeds are defined and not equal to zero
    it('feeds are defined', function() {
        expect(allFeeds).toBeDefined();
        expect(allFeeds.length).not.toBe(0);
    });

    /* TODO: Write a test that loops through each feed
     * in the allFeeds object and ensures it has a URL defined
     * and that the URL is not empty.
     */

     //Test to see if feeds have a defined url and that the ural is not empty
     it('feeds have defined url and url is not empty', function(){
       for(let index in allFeeds) {
         expect(allFeeds[index].url).toBeDefined();
         expect(allFeeds[index].length).not.toBe(0);
       }
     });

    /* TODO: Write a test that loops through each feed
     * in the allFeeds object and ensures it has a name defined
     * and that the name is not empty.
     */

     // Test to see if feeds have defined name and is not empty
     it('feeds have defined name and name is not empty', function(){
       for(let index in allFeeds) {
         expect(allFeeds[index].name).toBeDefined();
         expect(allFeeds[index].name.length).not.toBe(0);
       }
     });
  });


  /* TODO: Write a new test suite named "The menu" */
  describe('The menu', function(){

    /* TODO: Write a test that ensures the menu element is
     * hidden by default. You'll have to analyze the HTML and
     * the CSS to determine how we're performing the
     * hiding/showing of the menu element.
     */

     // Test to see that menu element is hidden by default using jQuery
     it('menu element is hidden by default', function(){
       expect($('body').hasClass('menu-hidden')).toEqual(true);
     });
     /* TODO: Write a test that ensures the menu changes
      * visibility when the menu icon is clicked. This test
      * should have two expectations: does the menu display when
      * clicked and does it hide when clicked again.
      */

      // Test to see if menu changes visibility when menu icon is clicked
      it('menu changes visibility when menu icon is clicked', function(){

        // Create clicked function using jQuery to call for a click
        function clicked() {
          $('.menu-icon-link').click();
        }

        // Call clicked and see if the menu toggles to being visible
        clicked();
        expect($('body').hasClass('menu-hidden')).toEqual(false);

        // Call clicked and see if the menu toggles to being hidden
        clicked();
        expect($('body').hasClass('menu-hidden')).toEqual(true);
      });
  });

  /* TODO: Write a new test suite named "Initial Entries" */
  describe('Initial Entries', function(){

    /* TODO: Write a test that ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     * Remember, loadFeed() is asynchronous so this test will require
     * the use of Jasmine's beforeEach and asynchronous done() function.
     */

     // BeforeEach to load the feed
     beforeEach(function(done){
       loadFeed(0, done);
     });

     // Check the entry to be sure that there is at least one
     it("loadFeed it completes it's work and there is at least a single entry in the feed container", function(){
       expect($('.entry').length).not.toBeLessThan(0);
     });
  });

  /* TODO: Write a new test suite named "New Feed Selection" */
  describe('New Feed Selection', function(){
    // Define new variable previousFeed to store first loaded feed
    let previousFeed;
    /* TODO: Write a test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     * Remember, loadFeed() is asynchronous.
     */

    //Before each to load the first feed and store it in previousFeed variable
    beforeEach(function(done){
      loadFeed(0, function() {
        previousFeed = $('.feed').html();

        //Load the current feed to compare to the previous feed
        loadFeed(1, done);
      });
    });

    // Check to be sure that the feeds do not match.
    it('feed to be different from previous feed', function(){
      expect($('.feed').html()).not.toBe(previousFeed);
    });
  });
}());
