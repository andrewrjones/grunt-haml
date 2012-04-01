/*
 * grunt-haml
 * https://github.com/andrewrjones/grunt-haml
 *
 * Copyright (c) 2012 Andrew Jones
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {
  // Grunt utilities.
  var task = grunt.task;
  var file = grunt.file;
  var utils = grunt.utils;
  var log = grunt.log;
  var verbose = grunt.verbose;
  var fail = grunt.fail;
  var option = grunt.option;
  var config = grunt.config;
  var template = grunt.template;

  // ==========================================================================
  // TASKS
  // ==========================================================================

  grunt.registerMultiTask('haml', 'Your task description goes here.', function() {
    grunt.helper('haml', this.file.src, this.file.dest);
    
    // Fail task if errors were logged.
    if (this.errorCount) { return false; }
    
    // Otherwise, print a success message....
    log.writeln('File "' + this.file.dest + '" written as HTML.');
  });

  // ==========================================================================
  // HELPERS
  // ==========================================================================

  grunt.registerHelper('haml', function(src, dest) {
    var haml = require('haml');
    
    // read in source
    var raw = file.read(src);
    
    // render haml
    // TODO: pass a context if specified in config
    var html = haml.render(raw);
    
    // write the rendered haml
    file.write(dest, html);
  });

};
