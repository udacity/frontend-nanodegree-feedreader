module.exports = function(grunt) {

var mozjpeg = require('imagemin-mozjpeg');

// Project configuration.
grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),

	watch: {
		html: {
			files: ['src/*.html'],
			tasks: ['htmlmin']
		},
		uglify: {
			files: ['src/js/*.js'],
			tasks: ['uglify']
		},
		css: {
			files: ['src/css/*.scss'],
			tasks: ['sass']
		},
		imagemin: {
			files: ['src/img/*.*'],
			tasks: ['imagemin']
		}
	},
  	imagemin: {                          // Task
		// static: {                          // Target
		// 	options: {                       // Target options
		// 		optimizationLevel: 3,
		// 		svgoPlugins: [{ removeViewBox: false }],
		// 		use: [mozjpeg()]
		// 	},
		// 	files: {                         // Dictionary of files
		// 		'dist/img.png': 'src/img.png', // 'destination': 'source'
		// 		'dist/img.jpg': 'src/img.jpg',
		// 		'dist/img.gif': 'src/img.gif'
		// 	}
		// },
		dynamic: {                         // Another target
			files: [{
				expand: true,                  // Enable dynamic expansion
				cwd: 'src/img/',                   // Src matches are relative to this path
				src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
				dest: 'dist/img/'                  // Destination path prefix
			}]
		}
	},
  	uglify: {
		options: {
			banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
		},
		my_target: {
			files: [{
				expand: true,
				cwd: 'src/js',
				src: '**/*.js',
				dest: 'dist/js'
			}]
		}
	},
	sass: {
		dist: {
			options: {
				style: 'compressed'
			},
			files: [{
				expand: true,
				cwd: 'src/css',
				src: ['*.scss'],
				dest: 'dist/css',
				ext: '.min.css'
			}]
		}
	},
	htmlmin: {                                     // Task
		dist: {                                      // Target
			options: {                                 // Target options
				removeComments: true,
				collapseWhitespace: true
			},
			files: {                                   // Dictionary of files
				'dist/index.html': 'src/index.html',     // 'destination': 'source'
				// 'dist/contact.html': 'src/contact.html'
			}
		}
		// dev: {                                       // Another target
		// 	files: {
		// 		'dist/index.html': 'src/index.html',
		// 		'dist/contact.html': 'src/contact.html'
		// 	}
		// }
	},
  	pagespeed: {
		options: {
			nokey: true,
			// url: "http://59838d9b.ngrok.io"
			url: "http://jscott10.github.io"
		},
		prod_mob: {
			options: {
				// url: "http://59838d9b.ngrok.io/fend-p5-nmp/",
				url: "http://jscott10.github.io/UdacityProject6-1/",
				locale: "en_GB",
				strategy: "mobile",
				threshold: 50
			}
		},
		prod_desk: {
			options: {
				// url: "http://59838d9b.ngrok.io/fend-p5-nmp/",
				url: "http://jscott10.github.io/UdacityProject6-1/",
				locale: "en_GB",
				strategy: "desktop",
				threshold: 50
			}
		}
	}
});


// Load the plugin that provides the "uglify" task.
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-sass');
// grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-htmlmin');
grunt.loadNpmTasks('grunt-pagespeed');
grunt.loadNpmTasks('grunt-ftpush');

// Default task(s).
// grunt.registerTask('default', ['uglify', 'imagemin', 'sass', 'cssmin', 'htmlmin', 'pagespeed']);
// grunt.registerTask('default', ['uglify', 'imagemin', 'sass', 'htmlmin', 'pagespeed']);
grunt.registerTask('default', ['watch', 'uglify', 'imagemin', 'sass', 'htmlmin', 'pagespeed']);

};
