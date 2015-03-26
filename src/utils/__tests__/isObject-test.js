var src = '../isObject';
jest.dontMock(src);
var isObject = require(src);

// rt = return true
// rf = return false
describe('isObject util', function() {
  it('should rf when undefined', function() {
    expect(isObject()).toBeFalsy();
  });

  it('should rf when primitive or string', function() {
    expect(isObject('')).toBeFalsy();
  });

  it('should rf when array and strict mode is undefined or true', function() {
    expect(isObject([])).toBeFalsy();
    expect(isObject([], { strict: true })).toBeFalsy();
  });

  it('should rt when actually an object', function() {
    expect(isObject({})).toBeTruthy();
  });
});