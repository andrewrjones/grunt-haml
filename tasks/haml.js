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
  
  // external dependencies
  var fs = require('fs');
  var haml = require('haml');

  // ==========================================================================
  // TASKS
  // ==========================================================================

  grunt.registerMultiTask('haml', 'Compile HAML files.', function() {
    var src     = this.file.src;
    var dest    = this.file.dest;
    var options = this.data.options || {};
    
    if (!src) {
      grunt.warn('Missing src property.');
      return false;
    }

    if (!dest) {
      grunt.warn('Missing dest property');
      return false;
    }
    
    var srcFiles = file.expandFiles(src);
    
    var done = this.async();
    
    grunt.helper('haml', srcFiles, options, function(err, html) {
      if (err) {
        grunt.warn(err);
        done(false);
        
        return;
      }

      file.write(dest, html);
      done();
    });
  });

  // ==========================================================================
  // HELPERS
  // ==========================================================================

  grunt.registerHelper('haml', function(srcFiles, options, callback) {
    var compileHAMLFile = function(src, callback){
      fs.readFile(src, 'utf8', function(err, data) {
        if (err) {
          callback(err);
        }
      
        verbose.writeln('Parsing ' + src);
        var html = haml.render(data);
        
        callback(null, html);
      });
    };
    
    utils.async.map(srcFiles, compileHAMLFile, function(err, results) {
      if (err) {
        callback(err);
        return;
      }
     
      callback(null, results.join(utils.linefeed));
    });
  });
};
