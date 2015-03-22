var src = '../index.jsx';
jest.dontMock(src);

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var Mixin = require(src);

describe('Validation Mixin', function() {
  describe('touches', function() {
    it('should add field to list');
    it('should add field to touch fields for only once');
  });
  
  describe('validation', function() {
    it('should not validate fields unless `touched`');
    it('should validate all fields whether `touched` or not');
  });
});
