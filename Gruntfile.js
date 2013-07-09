module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    uglify: {
      'x-tag-js': {
        files: {
          'public/js/x-tag-components.min.js' : ['public/js/x-tag-components.js']
        }
      }
    },
    'smush-components': {
      options: {
        fileMap: {
          js: 'public/js/x-tag-components.js',
          css: 'public/css/x-tag-components.css'
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-smush-components');

  grunt.registerTask('build', ['smush-components', 'uglify:x-tag-js']);
  grunt.registerTask('build-dist', ['concat:x-tag-dist','uglify:x-tag-dist']);
  grunt.registerTask('build-all', ['build','build-dist']);
  grunt.registerTask('smush',['smush-components']);
  grunt.registerTask('default', ['build-all']);

};