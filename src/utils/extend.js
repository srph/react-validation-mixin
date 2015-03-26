/**
 * An `extend` util method which transfers source the
 * properties and its respectives values to the destination
 * object. This method does not accept arrays (since we don't need it)
 *
 * @usage
 * var x = { hello: 'world' };
 * var y = extend(x, { hello: 'javascript'});
 * // x == y => true
 *
 * @param {Object} dest
 * @param {...Object} object sources (to copy from)
 * @return {Object}
 */
module.exports = function(dest) {
  // Let's bail when the destionation object is not an object
  _throw(arg, 'Dest');

  for ( var i = 1; i < arguments.length; i++ ) {
    var arg = arguments[i];

    // We'll test each argument to produce proper errors
    // if the provided argument is invalid
    _throw(arg, 'Source object');
    
    // Iterate through each mudafucka
    for ( key in arg ) {
      dest[key] = arg[key];
    }
  }

  return dest;
}

/**
 * Utility method of a utility method (lol)
 * that just executes `isObject`, and then
 * throws an exception if it returns false
 *
 * @throws Error
 * @param {mixed} argument to be tested
 * @param {string} Label to be printed out to the console
 * @return {void}
 */
function _throw(arg, label) {
  if ( !isObject(arg) ) {
    throw new Error(label + ' you provided (' +
      dest + ') is not a valid object.');
  }
}