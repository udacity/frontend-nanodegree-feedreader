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
			files: ['src/js/*.js','src/jasmine/spec/*.js'],
			tasks: ['uglify']
		},
		css: {
			files: ['src/css/*.css'],
			tasks: ['cssmin']
		},
		imagemin: {
			files: ['src/img/*.*'],
			tasks: ['imagemin']
		}
	},
  	imagemin: {
		dynamic: {
			files: [{
				expand: true,
				cwd: 'src/img/',
				src: ['**/*.{png,jpg,gif}'],
				dest: 'dist/img/'
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
	cssmin: {
		target: {
			files: [{
				expand: true,
				cwd: 'src/css',
				src: ['*.css', '!*.min.css'],
				dest: 'dist/css',
				ext: '.min.css'
			}]
		}
	},
	htmlmin: {                                     // Task
		dist: {                                    // Target
			options: {                             // Target options
				removeComments: true,
				collapseWhitespace: true
			},
			files: {                                     // Dictionary of files
				'dist/index.html': 'src/index.html',     // 'destination': 'source'
			}
		}
	}
});


// Load the plugin that provides the "uglify" task.
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-htmlmin');

// Default task(s).
grunt.registerTask('default', ['watch', 'uglify', 'imagemin', 'cssmin', 'htmlmin']);

};
