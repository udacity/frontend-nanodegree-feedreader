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
         * 1 spec, 1 failure: expected 0 not to be zero.
         */
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    it('have associated urls', function() {
      for (i=0; i < allFeeds.length; i++){
        expect(allFeeds[i].url).toBeDefined;
        expect(allFeeds[i].url.length).not.toBe(0);
      }
    });

    it('have names', function() {
      for (i=0; i < allFeeds.length; i++) {
        expect(allFeeds[i].name).toBeDefined;
        expect(allFeeds[i].name.length).not.toBe(0);
      }
    });
  });

  describe('The menu', function() {
    it('is initially hidden',function(){
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });
    it('visibility changes when clicked', function(){
      expect($('body').hasClass('menu-hidden')).toBe(true);
      $('.menu-icon-link').click();
      expect($('body').hasClass('menu-hidden')).toBe(false);
      $('.menu-icon-link').click();
      expect($('body').hasClass('menu-hidden')).toBe(true);
    })
  });
  describe('Initial Entries', function() {
      beforeEach(function(done){
         loadFeed(0,done);
      });
      it('return at least one row', function(done){
        expect($(".feed .entry").length).not.toBe(0);
        done();
      });
  });
  describe('New Feed Selection', function(){
      beforeEach(function(done){
         loadFeed(0,done);
      });
    it('changes after load',function(){
      var startState = $('.feed').html();
      loadFeed(1,function(done){
        loadFeed(1,done);
      });
      expect($('.feed').html != startState).toBe(true);
    });
 });
});
