module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less:{
            development:{
                files:{
                    'dev/styles/main.css': 'source/styles/main.less'
                }
            },
            production:{
                options: {
                    compress: true,
                },
                files:{
                    'dist/styles/main.min.css': 'source/styles/main.less'
                }
            }
        },
        uglify:{
            target:{
                files:{
                    'dist/script/main.min.js': 'source/script/main.js'
                }
            }
        },
        watch:{
            less:{
                files:['source/styles/**/*.less'],
                tasks: ['less:development']
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-less')
    grunt.loadNpmTasks('grunt-contrib-watch')
    grunt.loadNpmTasks('grunt-contrib-uglify')

    grunt.registerTask('default', ['watch'])
    grunt.registerTask('build', ['less:production', 'uglify'])

}