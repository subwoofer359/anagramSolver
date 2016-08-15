/*global module*/
module.exports = function (grunt) {
    "use strict";
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        env: {
            coverage: {
                APP_DIR_FOR_CODE_COVERAGE: 'test/coverage/instrument/app/'
            }
        },
        jshint: {
            all: ['Gruntfile.js', 'lib/*.js', 'test/*.js', '!node_modules/**'],
            options: {
            	jshintrc: true
            }
        },
        githooks: {
            all: {
                options: {
            // 
                },
                'pre-commit' : 'jshint qunit'
            }
        },
	mochaTest: {
		src: ['test/**/*.js']
	}
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-githooks');
    grunt.loadNpmTasks('grunt-mocha-test');

    grunt.registerTask('default', ['mochaTest', 'jshint']);
};
