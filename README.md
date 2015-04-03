#Feed Reader Test

Click "index.html" to open the test result page, there are four testing suite. The following is a detailed explanation of tests in each suite.

##Test Suite 'RSS Feeds'

(1) a test that ensures that the allFeeds array is not empty.

(2) a test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.

(3) a test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.Here I customize a matcher "toHaveNonEmpty" to check if all the objects in one array have certain non-empty attributs.

##Test Suite "The menu".
(1)a test that ensures the menu element is hidden by default.

(2)a test that ensures the menu changes visibility when the menu icon is clicked.


##Test Suite 'Initial Entries'
(1) a test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.

####Test Suite 'New Feed Selection'

(1)write a test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.

