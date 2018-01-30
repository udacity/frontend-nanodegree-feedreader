## Project Overview

This Project is a web-based application that reads RSS feeds. Having into account that testing is an important part of the development process and all organizations practice it in one way or another, it's an important skill to have. This document expouse the steps taken to successfuly complete this project.


## Description

Jasmine is a behavior-driven development framework for testing javascript code that was used to performmed all the tests, the code was written respecting [Udacity Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/javascript.html) and [Jasmine syntax](https://jasmine.github.io/2.1/introduction). Tests are placed inside `feedreader.js`. 

## Tests Performmed with Jasmine?

1.  Inside **RSS Feeds** suite test
* Check Feeds **are defined**, ensuring that `allFeeds` array is defined and its length is not cero.
* Check that feed objects in `allFedds` array **has url defined and is not empty**, ensuring that each feed object has defined a string property called `url` and its length is greater than cero.
* Check that feed objects in `allFedds` array **has name define and it is not empty**, ensuring that each feed object has defined a string property called `name` and its length is greater than cero.

2. Inside **The menu** suite test
* Check that the menu **is hidden by default**, ensuring that when the page first loaded, the `body element` contain the `hidden-menu`class. 
* Check that the menu **change visibility when the menu icon is clicked**, ensuring that when the `menu icon` in the top left corner is clicked the `slide menu` appear if the body element contain the `hidden-menu` class and hide if the `body element` doesn't contain the class.

3. Inside **Initial Entries** suite test
* Check that when the `loadFeed` function is called and complete its work **there is at least one entry element**, ensuring that the amount of `.entry` elements inside the `.feed` container is greater than 0.

4. Inside **New Feed Selection** suite test
* Check that when it **is loaded the content change**, ensuring that the comparisson between the content in `.feed` container after one call to `loadFeed` function is different that the content in `.feed` container after a second call to `loadFeed` function.

## Usage

Load index.htm file in a browser of your preference. The site was successfully tested in:
* **Google Chrome:** Version 62.0.3202.94 (Official Build) (64-bit)
* **Safari:** Version 11.0.1 (12604.3.5.1.1)
* **Mozilla Firefox:** Version 56.0.1 (64-bit)

## Tools

* [Jasmine](https://jasmine.github.io/2.1/introduction)
* [jQuery](http://jquery.com/download/) 
* [Handlebars](http://handlebarsjs.com/installation.html) 
* [Google API loader](https://developers.google.com/loader/)

## Download

Available for download [here]() 