const menu = document.querySelector('.menu-icon-link');
const body = document.body;
const feed = document.querySelector('.feed');
const loaded = [];

//#region
/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
//#endregion
$(
  (function() {
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
      it('are defined', () => {
        expect(allFeeds).toBeDefined();
        expect(allFeeds.length).not.toBe(0);
      });

      /* TODO: Write a test that loops through each feed
           * in the allFeeds object and ensures it has a URL defined
           * and that the URL is not empty.
           */
      it('has a URL defined', () => {
        for (let feed of allFeeds) {
          expect(feed.url).toBeDefined();
          expect(feed.url.length).not.toBe(0);
        }
      });

      /* TODO: Write a test that loops through each feed
           * in the allFeeds object and ensures it has a name defined
           * and that the name is not empty.
           */
      it('has a name defined', () => {
        for (let name of allFeeds) {
          expect(name.url).toBeDefined();
          expect(name.url.length).not.toBe(0);
        }
      });
    });

    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', () => {
      /* TODO: Write a test that ensures the menu element is
               * hidden by default. You'll have to analyze the HTML and
               * the CSS to determine how we're performing the
               * hiding/showing of the menu element.
               */
      it('should be hidden by default', () => {
        expect(body.classList.contains('menu-hidden')).toBe(true);
      });
      /* TODO: Write a test that ensures the menu changes
              * visibility when the menu icon is clicked. This test
              * should have two expectations: does the menu display when
              * clicked and does it hide when clicked again.
              */
      it('on click menu is visible', () => {
        menu.click();
        expect(body.classList.contains('menu-hidden')).toBe(false);
        menu.click();
        expect(body.classList.contains('menu-hidden')).toBe(true);
      });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entires', () => {
      /* TODO: Write a test that ensures when the loadFeed
               * function is called and completes its work, there is at least
               * a single .entry element within the .feed container.
               * Remember, loadFeed() is asynchronous so this test will require
               * the use of Jasmine's beforeEach and asynchronous done() function.
               */
      beforeEach((done) => loadFeed(0, done));
      it('Contains at least one entry', () => {
        expect(feed.children.length).not.toBe(0);
      });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', () => {
      /* TODO: Write a test that ensures when a new feed is loaded
               * by the loadFeed function that the content actually changes.
               * Remember, loadFeed() is asynchronous.
               */
      //checking if array has new feed data

      beforeEach((done) => {
        loadFeed(0, () => {
          const entries = document.querySelectorAll('.entry');
          const entry_1 = entries[0];
          loaded.push(entry_1);
          loadFeed(1, () => {
            const entry_2 = entries[1];
            loaded.push(entry_2);
            done();
          });
        });
      });

      it('Content changes when new feed is added', () => {
        expect(loaded.length).toBe(2);
        expect(loaded[0] !== loaded[1]).toBe(true);
      });
    });
  })(),
);
