'use strict';

/* jshint node: true */

module.exports = function(grunt) {
  require('jit-grunt')(grunt);
  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          'dist/style/main.css': 'src/main.less'
        }
      }
    },
    watch: {
      styles: {
        files: ['src/main.less', 'src/**/**/*.less'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
      // },
      // scripts: {
      //   files: ['src/**/**/*.js', 'src/**/**/*.html'],
      //   tasks: ['build'],
      //   options: {
      //     nospawn: true
      //   }
      }
    },
    coverage: {
      default: {
        options: {
          thresholds: {
            'statements': 90,
            'branches': 90,
            'lines': 90,
            'functions': 90
          },
          dir: 'coverage',
          root: 'test'
        }
      }
    },
    processhtml: {
      dist: {
        files: {
          'dist/index.html': ['src/index.html']
        }
      }
    },
    requirejs: {
      compile: {
        options: {
          'baseUrl': 'src',
          'paths': {
              'knockout': 'bower_modules/knockout/dist/knockout',
              'text':     'bower_modules/requirejs-text/text'
          },

          'name': 'app/startup',
          'out':  'dist/js/app.js',
          preserveLicenseComments: false,
          include: [
            'bower_modules/requirejs/require.js',
            'bower_modules/jquery/dist/jquery.min.js',
            'bower_modules/materialize/dist/js/materialize.min.js'
          ]
        }
      }
    },
    copy: {
      main: {
        files: [
          {
            expand: true,
            src: ['src/images/**'],
            flatten: true,
            dest: 'dist/images/',
            filter: 'isFile'
          },
          {
            expand: true,
            cwd: 'src/bower_modules/materialize/dist/font/',
            src: '**',
            dest: 'dist/font/'
          }
        ]
      }
    }
  });

  grunt.registerTask('default', ['less', 'copy', /*'build',*/ 'watch']);
  grunt.registerTask('js', ['requirejs']);
  grunt.registerTask('css', ['less']);
  grunt.registerTask('html', ['processhtml']);
  grunt.registerTask('coverage', ['coverage']);
  grunt.registerTask('build', ['copy', 'html', 'js', 'css']);
};
