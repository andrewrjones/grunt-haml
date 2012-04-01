var grunt = require('grunt');
var shell = require('shelljs');

var testFixturesDir = "test/fixtures";

exports['haml'] = {
  setUp: function(done) {
    done();
  },
  tearDown: function (done) {
      // clean up html files
      grunt.file.recurse(testFixturesDir, function(abspath, rootdir, subdir, filename){
        if(filename.match(/html?$/)){
          shell.rm(abspath);
        }
      });
      done();
    },
  'helper': function(test) {
    test.expect(1);
    
    var src = testFixturesDir + '/1.haml';
    var dest = testFixturesDir + '/1.html';
    
    grunt.helper('haml', src, dest);
    
    var got = grunt.file.read(dest);
    var expected = '<div id="home"><ul class="menu"><li>Go Home</li><li>Go Back</li></ul></div>';
    
    test.equal(got, expected, 'should return the correct value.');
    test.done();
  }
};