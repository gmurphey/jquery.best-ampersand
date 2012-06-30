module.exports = function (grunt) {
	grunt.initConfig({
		lint: {
			all: ["lib/*.js", "grunt.js"]
		},

		jshint: {
			options: {
				browser: true
			}
		},

		min: {
			dist: {
				src: ["lib/jquery.best-ampersand.js"],
				dest: "lib/jquery.best-ampersand.min.js"
			}
		}
	});

	grunt.registerTask("default", "lint min");
};
