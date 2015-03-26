var src = '../extend';
jest.dontMock(src);
var extend = require(src);
var isObject = require('../isObject');

describe('extend util', function() {
  it('should transfer all [props / values source objects] to the [dest object]', function() {
    isObject.mockReturnValue(true);

    var x = { hello: 'world' };
    extend(x, { swag: 'x', yolo: 'swag' });
    expect(x).toEqual({ hello: 'world', swag: 'x', yolo: 'swag' });
  });

  it('should return the resulting [dest object]', function() {
    isObject.mockReturnValue(true);

    var x = { hello: 'world' };
    var y = extend(x, { swag: 'x', yolo: 'swag' });
    expect(y).toEqual({ hello: 'world', swag: 'x', yolo: 'swag' });
  });

  it('should throw when any of the arg is not an obj', function() {
    isObject.mockImpl(function() {
      return isObject.mock.calls.length == 1 ? false : true;
    });

    expect(function() { extend([], {}); }).toThrow();
  });

  // Clear `isObject` mock calls
  afterEach(function() {
    isObject.mockClear();
  })
});