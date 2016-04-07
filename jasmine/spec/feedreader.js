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
		 *
		 * Changed to check for valid URL
		 */

		it('all contain URLs', function() {
			var url_regex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
			allFeeds.forEach(function(item, index) {
				expect(item.url).toBeDefined();
				expect(item.url).toMatch(url_regex);
			});
		});


		/* Write a test that loops through each feed
		 * in the allFeeds object and ensures it has a name defined
		 * and that the name is not empty.
		 */

		it('all contain names', function() {
			allFeeds.forEach(function(item, index) {
				expect(item.name).toBeDefined();
				expect(item.name.length).not.toBe(0);
			});
		});

	});

    /* Write a new test suite named "The menu" */
    describe('The Menu', function() {

		/* Write a test that ensures the menu element is
		 * hidden by default. You'll have to analyze the HTML and
		 * the CSS to determine how we're performing the
		 * hiding/showing of the menu element.
		 */

		it('is hidden by default', function() {
			expect($('body').hasClass('menu-hidden')).toEqual(true);
		});

		/* Write a test that ensures the menu changes
		 * visibility when the menu icon is clicked. This test
		 * should have two expectations: does the menu display when
		 * clicked and does it hide when clicked again.
		 */

		it('toggles when the menu icon is clicked', function() {

			// Initial state of the menu
			var menuIsHidden = $('body').hasClass('menu-hidden');

			// Simulate a click and check that the menu state has changed
			$(".menu-icon-link").click();

			expect($('body').hasClass('menu-hidden')).not.toEqual(menuIsHidden);

			// Simulate a second click and check that the menu has gone back to its original state
			$(".menu-icon-link").click();

			expect($('body').hasClass('menu-hidden')).toEqual(menuIsHidden);
		});
    });

    /* Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {

		/* Write a test that ensures when the loadFeed
		 * function is called and completes its work, there is at least
		 * a single .entry element within the .feed container.
		 * Remember, loadFeed() is asynchronous so this test will require
		 * the use of Jasmine's beforeEach and asynchronous done() function.
		 */

		/*
		 * Load the first feed and confirm the number of .entry items > 0
		 * Number of entry itmes is the size of array returned by $(".feed .entry")
		 */
		beforeEach(function(done) {
			loadFeed(0, done);
		});

		it('exist in the feed list', function(done) {
			expect($(".feed .entry").length).toBeGreaterThan(0);
			done();
		});
	});

    /* Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function(done) {

        /* Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

		var content;

		beforeEach(function(done) {
			loadFeed(0, function() { // Load the first feed
				content = $(".feed .entry h2").text(); // Store the content of the first entry
				loadFeed(1, function() { // Load the second feed
					done();
				});
			});
		});

		afterEach(function() {
			loadFeed(0);
		});

		/*
		 * Verify that the content of first entry of the current feed is not the same as the previouly saved content
		 */
		it('loads new content', function(done) {
			expect($(".feed .entry h2").text()).not.toBe(content);
			done();
		});
	});

}());
