module.exports = function(grunt) {
    grunt.initConfig({
        clean: {
            build: {
              src: ['js/']
            }
          },
        ts: {
            default : {
                tsconfig: './tsconfig.json'
            }
        },
        copy: {
            main: {
                files:[
                    {expand: true, cwd: 'custom_widgets/', src: ['**/*.json'], dest: 'js/'},
                ]
            }
        }

    });
    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask("default", ["clean","ts", "copy"]);
  };