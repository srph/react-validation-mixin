var src = '../index.js';
jest.dontMock(src);
var handler = jest.genMockFunction();
var unit = require('../utils/index');

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var Vixin = require(src);

describe('Validation Mixin', function() {
  beforeEach(function() {
    unit.isObject.mockReturnValue(true);
  });

  describe('exceptions for passed `rule` argument', function() {
    // Utility to test `Vixin` from throwing
    var toThrow = function(rule) {
      expect(function() { Vixin(rule) }).toThrow();
    }

    it('should throw when not `unit.isObject` returns false', function() {
      unit.isObject.mockReturnValue(false);
      toThrow([]);
      toThrow(1);
      toThrow(2.5);
      toThrow(-2.5);
      toThrow('');
      toThrow();
    });

    it('should not throw when `unit.isObject` returns true', function() {
      expect(function() { Vixin({}) }).not.toThrow();
    });
  });

  it('should call the provided `handler` argument', function() {
    var mixin = Vixin({}, handler);

    expect(handler.mock.calls.length).toBe(0);
    mixin.handleValidation();
    expect(handler.mock.calls.length).toBe(1);
  });

  it('should call the provided `handler` argument with the mixin/components context (`this`)', function() {
    var ctx;
    handler.mockImpl(function() { ctx = this; });
    var mixin = Vixin({}, handler);

    mixin.handleValidation();
    expect(ctx).toBe(mixin);
  });

  // Clear all `dummy` handler and `unit.isObject` calls
  afterEach(function() {
    unit.isObject.mockClear();
    handler.mockClear();
  });
});
