/**
 * A *special* `util` `isObject` method (actually a convenience method)
 * which strictly accepts objects except arrays
 *
 * @param {mixed} arg Value to be checked
 * @param {Object} Strict mode option
 * @return {boolean}
 */
module.exports = function(arg, strict) {
  return arg !== undefined
    && (strict === true ? true : !Array.isArray(arg))
    && typeof arg == 'object';
}