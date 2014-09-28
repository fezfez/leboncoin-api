module.exports = function (grunt) {
  'use strict';
  var publicPort = 8000;

  grunt.initConfig({
    pkg: grunt.file.readJSON('./package.json'),

    watch: {
      scripts: {
        files: ['./src/**'],
        tasks: ['build'],
        options: {
          spawn: false,
        },
      },
    },

    clean: ["./build"],

    coffee: {
      compile: {
        files: {
          'build/leboncoinapi.js': 'src/**.coffee'
        }
      }
    }
  });

  /* load every plugin in package.json */
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');

  /* grunt tasks */
  grunt.registerTask('build', ['clean', 'coffee']);
  grunt.registerTask('dev', ['coffee', 'watch']);
  grunt.registerTask('default', ['build']);

};