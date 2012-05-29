var grunt = require('grunt');

var testFixturesDir = "test/fixtures";

exports['haml'] = {
  'helper': function(test) {
    test.expect(1);
    
    var src = testFixturesDir + '/1.haml';
    var expected = '<div id="home"><ul class="menu"><li>Go Home</li><li>Go Back</li></ul></div>';
    
    grunt.helper('haml', [src], {}, function(err, got) {
      test.equal(got, expected, 'should return the correct value.');
      test.done();
    });
  }
};