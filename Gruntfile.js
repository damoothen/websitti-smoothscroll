module.exports = function (grunt) {

    grunt.initConfig({

        jshint: {
            js: {
                files: {
                    src: ['src/js/**/*.js']
                }
            }
        },

        uglify: {
            min: {
                files: {
                    'dist/js/jquery.smoothscroll.min.js': ['src/js/jquery.smoothscroll.js']
                }
            }
        },

        clean: {
            dist: ['dist']
        }

    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('dist', ['jshint', 'uglify']);

};
