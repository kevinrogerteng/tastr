module.exports = function(grunt){

  grunt.loadNpmTasks('grunt-injector'); 
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-wiredep');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    FILE_PATHS: {
      client: 'client',
      server: 'server'
    },
    concat: {
      // concat task configuration goes here.
    },
    injector: {
      options: {
        template: '<%= FILE_PATHS.client %>/indexTemplate.html',
        relative: true,
        addRootSlash: false
      }, 
      dev: {
        files: {
          '<%= FILE_PATHS.client %>/index.html': [
            '<%= FILE_PATHS.client %>/css/**/*.css',
            '<%= FILE_PATHS.client %>/modules/**/*.js',
            '<%= FILE_PATHS.client %>/modules/*.js',
            '<%= FILE_PATHS.client %>/bootstrap.js'
          ]
        }
      }
    },    
    wiredep: {
      dev: {
        src: ['<%= FILE_PATHS.client %>/index.html']
      },
      prod: {
        src: ['<%= FILE_PATHS.client %>/index.html']
      }
    }

  });

  grunt.registerTask('buildDev', function(){
    console.log('building development');
    grunt.task.run('injector:dev', 'wiredep:dev');
  });
};