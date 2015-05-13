RSS Feed Testing
RSS feed reader uses Google Feed Reader API to grap RSS feeds as JSON object.

Link to Demo http://rodchild.github.io/frontend-nanodegree-feedreader

Current functionality

JSON object manage RSS Feeds list
Feed content obtained using Google Feed Reader API
Menu contains list of all RSS Feeds
User may choose feed from the menu and browse loaded entries
Test Suits

RSS Feeds

Feeds are defined

Expected: rss feeds are defined

Feed url is defined

Expected: feed url is present

The Menu

Menu is hidden by default

Expected: Menu should be hidden upon page load

Menu visibility changes on click

Expected: Menu visibility should be toggled upon menu button click

Initial Entries

New Feed Selection

Expected:Feed container should have entries

New Feed Selection

Feed content changes

Expected:Feed content should change upon feed selection

Feed Entries

Feed entry has valid href value

Expected:Feed entry should have value link defined

Future functionality

User may add / delete rss feeds from the menu
Test Suits

RSS Feed Addition/Deletion

New feed can be added

Expected: User should be able to add new feed

Feed can be deleted

Expected: User should be able to delete existing feed

Project Overview
In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included Jasmine and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.

Why this Project?

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

Whether you work in an organization that uses test-driven development or in an organization that uses tests to make sure future feature development doesn't break existing features, it's an important skill to have!

What will I learn?

You will learn how to use Jasmine to write a number of tests against a pre-existing application. These will test the underlying business logic of the application as well as the event handling and DOM manipulation.

How will this help my career?

Writing effective tests requires analyzing multiple aspects of an application including the HTML, CSS and JavaScript - an extremely important skill when changing teams or joining a new company.
Good tests give you the ability to quickly analyze whether new code breaks an existing feature within your codebase, without having to manually test all of the functionality.
How will I complete this project?
Download the required project assets.
Review the functionality of the application within your browser.
Explore the application's HTML (./index.html), CSS (./css/style.css) and JavaScript (./js/app.js) to gain an understanding of how it works.
Explore the Jasmine spec file in ./jasmine/spec/feedreader.js
Edit the allFeeds variable in ./js/app.js to make the provided test fail and see how Jasmine visualizes this failure in your application.
Return the allFeeds variable to a passing state.
Write a test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
Write a test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
Write a new test suite named "The menu".
Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
Write a test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container. Remember, loadFeed() is asynchronous so this test wil require the use of Jasmine's beforeEach and asynchronous done() function.
Write a test that ensures when a new feed is loaded by the loadFeed function that the content actually changes. Remember, loadFeed() is asynchronous.
When complete - all of your tests should pass.