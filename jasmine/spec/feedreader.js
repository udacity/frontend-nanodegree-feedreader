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
    it('have a non-empty URL defined for each feed', function() {
      allFeeds.forEach(function(feed) {
        expect(feed.url).toBeDefined();
        expect(feed.url).not.toBe('');
      });
    });


    /* TODO: Write a test that loops through each feed
      * in the allFeeds object and ensures it has a name defined
      * and that the name is not empty.
      */
    it('have a non-empy name defined for each feed', function() {
      allFeeds.forEach(function(feed) {
        expect(feed.name).toBeDefined();
        expect(feed.name).not.toBe('');
      });
    });
  });


  /* TODO: Write a new test suite named "The menu" */
  describe('The menu', function() {
    /* TODO: Write a test that ensures the menu element is
      * hidden by default. You'll have to analyze the HTML and
      * the CSS to determine how we're performing the
      * hiding/showing of the menu element.
      */
    var defaultMenuItem, firstTimeMenuItemClicked, secondTimeMenuItemClicked;
    beforeEach(function() {
      // Capture Default Menu Item when the page loads
      defaultMenuItem = $('body').hasClass('menu-hidden');

      // Click on Menu Button and capture the Menu item Class
      $('.menu-icon-link').click();
      firstTimeMenuItemClicked = $('body').hasClass('menu-hidden');

      // Click on Menu Item again and again capture the Menu Item Class
      $('.menu-icon-link').click();
      secondTimeMenuItemClicked = $('body').hasClass('menu-hidden');

    });

    it('is hidden by default', function() {
      expect(defaultMenuItem).toBe(true);
    });

    /* TODO: Write a test that ensures the menu changes
      * visibility when the menu icon is clicked. This test
      * should have two expectations: does the menu display when
      * clicked and does it hide when clicked again.
      */
    it('changes visibility when clicked', function() {
      expect(firstTimeMenuItemClicked).toBe(false);
      expect(secondTimeMenuItemClicked).toBe(true);
    });
  });

  /* TODO: Write a new test suite named "Initial Entries" */
  describe('Initial Entries', function() {
    /* TODO: Write a test that ensures when the loadFeed
      * function is called and completes its work, there is at least
      * a single .entry element within the .feed container.
      * Remember, loadFeed() is asynchronous so this test will require
      * the use of Jasmine's beforeEach and asynchronous done() function.
      */
    beforeEach(function(done) {
      // Load the Page with first allFeed item
      loadFeed(allFeeds[0].id, function() {
        done();
      });
    });

    it('should have at least one entry', function(done) {
      expect($('.entry').children()).not.toBe({});
      done();
    });
     
  });

  /* TODO: Write a new test suite named "New Feed Selection" */
  describe('New Feed Selection', function() {
    /* TODO: Write a test that ensures when a new feed is loaded
      * by the loadFeed function that the content actually changes.
      * Remember, loadFeed() is asynchronous.
      */
    var initialContent = [], nextContent = [];
    
    beforeEach(function(done) {
      // Capture the initial content on the page when it loads with first item in allFeeds
      $('.entry').each(function() {
        initialContent.push($(this).text().trim());
      });

      // Call the API to load the page with second item in allFeeds
      loadFeed(1, function() {
        done();
      });
    });

    it('should have changed content when new feed is loaded', function(done) {  
      $('.entry').each(function() {
        nextContent.push($(this).text().trim());
      });
      expect(JSON.stringify(initialContent)).not.toBe(JSON.stringify(nextContent));
      done();
    });
  });
}());
