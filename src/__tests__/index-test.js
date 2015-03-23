var src = '../index.js';
jest.dontMock(src);

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var Vixin = require(src);

describe('Validation Mixin', function() {
  describe('exceptions for passed `rule` argument', function() {
    // Utility to test `Vixin` from throwing
    var toThrow = function(rule) {
      expect(function() { Vixin(rule) }).toThrow();
    }

    it('should throw when an array', function() {
      toThrow([]);
    });

    it('should throw when a number', function() {
      toThrow(1);
      toThrow(2.5);
      toThrow(-2.5);
    });

    it('should throw when a string', function() {
      toThrow('');
    });

    it('should throw when undefined', function() {
      toThrow();
    });

    it('should not throw when an object', function() {
      expect(function() { Vixin({}) }).not.toThrow();
    });
  });

  // ------------------
  // ------------------
  // ------------------

  describe('touches', function() {
    it('should add field to list');
    it('should add field to touch fields for only once');
  });

  // ------------------
  // ------------------
  // ------------------
  
  describe('validation', function() {
    it('should not validate fields unless `touched`');
    it('should validate all fields whether `touched` or not');
  });
});
