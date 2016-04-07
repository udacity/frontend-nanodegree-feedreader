# Udacity FEND Project 7 - Application Testing with Jasmine - Feed Reader

## Overview

This project provides implements a web-based RSS feed reader. A suite of test is included (written in Jasmine) to ensure the project functions as expected.

The project can be accessed at `https://jscott10.github.io/frontend-nanodegree-feedreader/dist/`

## Usage

Loading the project will present a list of feed entries for a default RSS feed (Udacity Blog).

The icon to the left of the title opens a sliding panel that contains a list of additional RSS feed sources. Clicking on an item in the list will populate the main window with entries from that RSS feed.

The results of the test suite are displayed at the bottom of the page. All tests should pass.

### To build the project

The project uses the following directory structure:

```
Source files:
src\
    css\
    js\

Compressed files for distribution
dist\
    css\
    fonts\
    js\

Jasmine:
jasmine\
	Jasmine distribution:
	lib\
	Spec file:
	src\feedreader.js
```

All code and images are minified and served from the `dist\` folder.

Grunt is used to automate the build process. To configure the Grunt environment you need the following packages:

```
grunt-contrib-watch
grunt-contrib-imagemin
grunt-contrib-uglify
grunt-contrib-cssmin
grunt-contrib-htmlmin
```

Running the grunt-contrib-watch process will run imagemin, uglify, cssmin or htmlmin when a file is change.
