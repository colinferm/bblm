/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.license %>; */\n',
    // Task configuration.
    watch: {
      concatJS: {
        files: ['/var/www/html/js/app/**/*.js', '!/var/www/html/js/lib/**/*'],
        tasks: ['concat:toCompiled', 'uglify:fromCompiled'],
        //tasks: ['concat:toCompiled', 'uglify:fromCompiled', 'clean:removeCompiled'],
        interrupt: true
      },
      concatTemplates: {
        files: ['/var/www/html/tmpl/**/*.html'],
        tasks: ['newer:concat:templates'],
        interrupt: true
      },
      concatLibs: {
        files: ['/var/www/html/js/lib/**/*'],
        tasks: ['concat:libs'],
        interrupt: true
      },
      scss: {
        files: "/var/www/html/**/*.scss",
        tasks: ['newer:sass'],
        interrupt: true
      }
		},
    concat: {
      options: {
        sourceMap: false,
      },
      js: {
        options: {
          banner: '',
          stripBanners: true
        },
        src: [
          '/var/www/html/js/utils/main.js', 
          '/var/www/html/js/app/**/*.js', 
          '!/var/www/html/js/lib/underscore-umd-min.js', 
          '!/var/www/html/js/lib/backbone-min.js', 
          '!/var/www/html/js/lib/jquery-3.6.0-min.js', 
          '!/var/www/html/js/lib/handlebars.min-v4.7.7.js'
        ],
        dest: '/var/www/html/js/bblm.js'
      },
      libs: {
        options: {
          banner: '',
          stripBanners: true,
          process: function(src, filePath) {
            if (src.charAt(src.length - 1) != ';') src = src + ';' + grunt.util.linefeed;
            return src;
          }
        },
        src: [
          '/var/www/html/js/lib/jquery-3.6.0.min.js',
          '/var/www/html/js/lib/underscore-umd-min.js',
          '/var/www/html/js/lib/backbone-min.js',
          '/var/www/html/js/lib/handlebars.min-v4.7.7.js'
        ],
        dest: '/var/www/html/js/libs.js'
      },
      toCompiled: {
        options: {
          banner: '',
          stripBanners: true
        },
        src: [
          '/var/www/html/js/utils/main.js', 
          '/var/www/html/js/app/**/*.js', 
          '!/var/www/html/js/lib/underscore-umd-min.js', 
          '!/var/www/html/js/lib/backbone-min.js', 
          '!/var/www/html/js/lib/jquery-3.6.0-min.js', 
          '!/var/www/html/js/lib/jquery-3.6.0-min.js',
          '!/var/www/html/js/lib/handlebars.min-v4.7.7.js'
        ],
        dest: '/var/www/html/js/bblm-compiled.js'
      },
      templates: {
        options: {
          process: function(src, filepath) {
            var match = /\/([a-zA-Z0-9\-\_]+)\.html/.exec(filepath);
            /*
            grunt.log.writeln(filepath);
            for (var i = 0; i < match.length; i++) {
              grunt.log.writeln(match[i]);  
            }
            */
            return '<script type="text/template" id="'+ match[1] + '">' +
                    grunt.util.linefeed +
                    src +
                    '</script>' +
                    grunt.util.linefeed;
          }
        },
        src: ['/var/www/html/tmpl/**/*.html'],
        dest: '/var/www/html/templates.html'
      }
    },
    uglify: {
      fromCompiled: {
        options: {
          sourceMap: true,
          mangle: false,
        },
        files: {
          '/var/www/html/js/bblm.js': ['/var/www/html/js/bblm-compiled.js']
        }
      }
    },
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: '/var/www/html',
          src: ['**/*.scss'],
          dest: '/var/www/html',
          ext: '.css'
        }]
      }
    },
    clean: {
      options: {
        'force': true
      },
      removeCompiled: ['/var/www/html/js/bblm-compiled.js'],
      all: [
        '/var/www/html/js/bblm-compiled.js', 
        '/var/www/html/js/bblm.js', 
        '/var/www/html/js/bblm.js.map', 
        '/var/www/html/js/libs.js', 
        '/var/www/html/templates.html'
      ],
      cleanCSS: [
        '/var/www/html/ios/css/bblm.css', 
        '/var/www/html/ios/css/bblm.css.map'
      ],
      cleanTemplates: ['/var/www/html/templates.html'],
      cleanJS: [
        '/var/www/html/js/bblm-compiled.js', 
        '/var/www/html/js/bblm.js', 
        '/var/www/html/js/bblm.js.map'
      ]
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-replace');

  // Default task.
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('process-js', ['concat:toCompiled', 'uglify:fromCompiled', 'clean:removeCompiled']);
  grunt.registerTask('process-templates', ['concat:templates']);
  grunt.registerTask('process-libs', ['concat:libs']);
  grunt.registerTask('process-sass', ['sass:dist']);
  grunt.registerTask('clean-all', ['clean:all']);
  grunt.registerTask('clean-compiled', ['clean:removeCompiled']);
  grunt.registerTask('refresh', ['clean:all', 'concat:toCompiled', 'uglify:fromCompiled', 'clean:removeCompiled', 'concat:templates', 'concat:libs', 'sass:dist']);


};
