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

  it('should call the provided `handler` argument', function() {
    var dummy = jest.genMockFunction();
    var mixin = Vixin({}, dummy);

    expect(dummy.mock.calls.length).toBe(0);
    mixin.handleValidation();
    expect(dummy.mock.calls.length).toBe(1);
  });

  it('should call the provided `handler` argument with the mixin/components context (`this`)', function() {
    var ctx;
    var dummy = jest.genMockFunction().mockImpl(function() { ctx = this; });
    var mixin = Vixin({}, dummy);

    mixin.handleValidation();
    expect(context).toBe(mixin);
  });
});
