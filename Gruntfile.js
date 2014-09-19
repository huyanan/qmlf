module.exports = function(grunt) {

  grunt.loadNpmTasks('gurnt-contrib-requirejs');
  //
  grunt.registerTask('build', 'require demo', function() {
    //任务列表
    var tasks = ['requirejs'];
    //源码文件
    var srcDir = 'src';
    //目标文件
    var destDir = 'dest';
    //设置参数
    grunt.config.set('config', {
      srcDir: srcDir,
      destDir: destDir
    });

    //设置 requireJs的信息
    var taskCfg = grunt.file.readJSON('gruntCfg.json');
    var options = taskCfg.requirejs.main.options,
      platformCfg = options.web,
      includes = platformCfg.include,
      paths = options.paths;
    var pos = -1;
    var requireTask = taskCfg.requirejs;
    options.path = paths;
    options.out = platformCfg.out;
    options.include = includes;
    //运行任务
    grunt.task.run(task);
    grunt.config.set("requirejs", requireTask);
  });
  return;

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // concat: {
    //   options: {
    //     separator: ';'
    //   },
    //   dist: {
    //     src: ['src/zepto.js','src/underscore.js','src/backbone.js','src/require.js'],
    //     dest: 'dest/libs.js'
    //   }
    // },
    // uglify: {
    //   options: {
    //     banner: '/*! <%= pkg.file %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    //   },
    //   build: {
    //     src: 'dest/libs.js',//'src/<%= pkg.file %>.js',
    //     dest: 'build/libs.min.js'//'build/<%= pkg.file %>.min.js'
    //   }
    // }
    uglify: {
      "my_target": {
        "files": {
          'dest/libs.min.js': ['src/zepto.js', 'src/underscore.js', 'src/backbone.js']
        }
      }
    }


  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // grunt.loadNpmTasks('grunt-contrib-concat');

  // Default task(s).
  grunt.registerTask('default', ['uglify' /*,'concat'*/ ]);

};