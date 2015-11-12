'use strict';

/* jshint node: true */

module.exports = function(grunt) {
  require('jit-grunt')(grunt);
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
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
            'bower_modules/requirejs/require.js'
            // Those files are not part of the build so far because require
            // doesn't work well with materializeCSS
            // 'bower_modules/jquery/dist/jquery.min.js',
            // 'bower_modules/materialize/dist/js/materialize.min.js'
          ]
        }
      }
    },
    concat: {
      options: {
        stripBanners: true,
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
          '<%= grunt.template.today("yyyy-mm-dd") %> */',
      },
      dist: {
        src: ['src/bower_modules/jquery/dist/jquery.min.js', 'src/bower_modules/materialize/dist/js/materialize.min.js', 'dist/js/app.js'],
        dest: 'dist/js/app.js',
      },
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
          // },
          // {
          //   expand: true,
          //   flatten: true,
          //   src: 'src/bower_modules/jquery/dist/jquery.min.js',
          //   dest: 'dist/js/'
          // },
          // {
          //   expand: true,
          //   flatten: true,
          //   src: 'src/bower_modules/materialize/dist/js/materialize.min.js',
          //   dest: 'dist/js/'
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
  grunt.registerTask('build', ['copy', 'html', 'js', 'css', 'concat']);
};
