$(function() {
	/*-----------------------------------
	-----------------------------------*/
    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

         it('Validation URL', function(){
            for(var i in allFeeds){
                expect(allFeeds[i].url).toBeDefined;
                expect(allFeeds[i].url.length).not.toBe(null);
            }
         });

         it('Validation Name', function(){
            for(var i in allFeeds){
                expect(allFeeds[i].name).toBeDefined;
                expect(allFeeds[i].name.length).not.toBe(null);
            }
         });
    });
	/*-----------------------------------
	-----------------------------------*/
    describe('Menu', function(){
            var menu = $('.menu-icon-link');
            var body = $('body');
		 
         it('Validation menu start', function(){
            expect(body.hasClass('menu-hidden')).toBeTruthy();
         });
         
          it('Clicked to icon-menu validation visible true or false', function(){
            menu.trigger('click');
            expect(body.hasClass('menu-hidden')).toBeFalsy();

            menu.trigger('click');
            expect(body.hasClass('menu-hidden')).toBeTruthy();
          });
    });
	/*-----------------------------------
	-----------------------------------*/
    describe('Initial Entries', function(){
		 
         beforeEach(function(done){
            loadFeed(0, done);
         });

         it('contain at least a single .entry element within the .feed container', function(done){
            var feedContainer = $('.feed').children();
            expect(feedContainer).toBeDefined();
            expect(feedContainer).not.toBe(0);
            expect(feedContainer.length).toBeGreaterThan(0);
            done();
         });
    });

   /*-----------------------------------
	-----------------------------------*/
    describe('New Feed Selection', function(){
   
        var feeds = $('.feed').find('h2').text();
         beforeEach(function(done){
            feeds;
            loadFeed(1, done);
         })

         it('Load of Feeds', function(done){
            expect($('.feed').find('h2').text()).not.toBe(feeds);
            done();
         });

         afterEach(function(done){
            loadFeed(0, done);
         });
    });
}());