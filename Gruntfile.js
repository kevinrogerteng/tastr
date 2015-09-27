module.exports = function(grunt){

  grunt.loadNpmTasks('grunt-injector'); 
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-nodemon');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    FILE_PATHS: {
      client: 'client',
      server: 'server'
    },
    concat: {
      // concat task configuration goes here.
    },
    nodemon: {
      dev: {
        script: 'server/server.js',
        options: {
          args: [],
          watch: ['server/*'],
          ext: 'js',
          nodeArgs: ['--debug'],
          delayTime: 1,
          env: {
            PORT: 3000,
            NODE_ENV: 'dev'
          },
          cwd: __dirname
        }
      }
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