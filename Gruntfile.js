module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('./package.json'),

        watch: {
            scripts: {
                files: ['./src/**'],
                tasks: ['build'],
                options: {
                    spawn: false
                }
            }
        },

        clean: ["./build"],

        typescript: {
            base: {
                src: ['src/**/*.ts'],
                dest: 'build/',
                options: {
                    module: 'commonjs',
                    target: 'es5',
                    sourceMap: true,
                    declaration: true
                }
            }
        }
    });

    /* load every plugin in package.json */
    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');

    /* grunt tasks */
    grunt.registerTask('build', ['clean', 'typescript']);
    grunt.registerTask('dev', ['build', 'watch']);
    grunt.registerTask('default', ['build']);

};