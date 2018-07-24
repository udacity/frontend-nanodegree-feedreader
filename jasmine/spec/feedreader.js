/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', () => {
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
        it('has defined non-empty urls', () => {
            allFeeds.forEach(f => {
                expect(f.url).toBeDefined();
                expect(f.url).not.toBe('');
            });
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('has defined non-empty names', () => {
            allFeeds.forEach(f => {
                expect(f.name).toBeDefined();
                expect(f.name).not.toBe('');
            });
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', () => {
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

        const body = document.querySelector('body');

        it('starts open', () => {
            expect(body.classList).toContain('menu-hidden');
        });

        /* TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('icon toggles menu display', () => {
            const menu = document.querySelector('.menu-icon-link');

            menu.click();
            expect(body.classList).not.toContain('menu-hidden');

            menu.click();
            expect(body.classList).toContain('menu-hidden');
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', () => {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        beforeEach( (done) => {
            loadFeed(0, () => {
                done()
            });
        });

        it('has at least one entry', (done) => {
            const container = $('.feed');
            expect(container).not.toBeNull();

            const entryList = container.first().find('.entry');
            expect(entryList.length).toBeGreaterThan(0);

            done();
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', (done) => {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

        const container = $('.feed');
        let feed, event;
        
        const checkLinks = (evt) => {
            evt.preventDefault();
            event = evt;
        }

        beforeEach((done) => {
            
            // Capture clicking of a link
            $(document).on('click', 'a', checkLinks);
            
            loadFeed(0, () => {
                
                // trigger click on feed
                feed = $('.feed a')[0];
                feed.click();
                
                done();
            });
        });

        afterEach( (done) => {
            $(document).off('click', 'a', checkLinks);
            done();
        });

        it('is loaded', (done) => {

            // ensure that window location will change
            expect(event.target.href).toBe('http://blog.udacity.com/2018/07/this-former-engineer-landed-his-dream-career-as-a-data-scientist.html');
            expect(event.target.href).not.toBe('http://127.0.0.1:5500/index.html#');
            
            // Page content shouldn't include menu link
            expect(document.body.classList).not.toContain('menu-icon-link');
            done();
        });
    });
}());
