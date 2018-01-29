# Project Overview

This Project is a web-based application that reads RSS feeds. Having into account that testing is an important part of the development process and all organizations practice it in one way or another, it's an important skill to have. This document expouse the steps taken to successfuly complete this project.


## Description

* Jasmine is a behavior-driven development framework for testing javascript code that was used to performmed all the tests, the code was written respecting [Udacity Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/javascript.html) and [Jasmine syntax](https://jasmine.github.io/2.1/introduction). Tests are placed inside `feedreader.js`. 

# Tests Performmed with Jasmine?

1.  Check that `allFeeds` array is defined and its length is not cero.
2. Loops through `allFedds` array and check that each feed object in it has defined a string property called `url` and its length is greater than cero.
3. Loops through `allFedds` array and check that each feed object in it has defined a string property called `name` and its length is greater than cero.
4. Check that when the page first loaded, the `body element` contain the `hidden-menu`class. 
5. Check that when the `menu icon` in the top left corner is clicked the `slide menu` appear if the body element contain the `hidden-menu` class and hide if the `body element` doesn't contain the class.
6. Check that when the `loadFeed` function is called and complete its work, the amount of `.entry` elements inside the `.feed` container is greater than 0.
7. Check that when `loadFeed` function is called the content in `.feed` container actually changes.

## Usage

Load index.htm file in a browser of your preference. The site was successfully tested in:
* **Google Chrome:** Version 62.0.3202.94 (Official Build) (64-bit)
* **Safari:** Version 11.0.1 (12604.3.5.1.1)
* **Mozilla Firefox:** Version 56.0.1 (64-bit)

##Tools

* [Jasmine](https://jasmine.github.io/2.1/introduction)
* [jQuery](http://jquery.com/download/) 
* [Handlebars](http://handlebarsjs.com/installation.html) 
* [Google API loader](https://developers.google.com/loader/)

##Download

* Available for download [here]() 