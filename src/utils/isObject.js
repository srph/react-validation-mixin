/**
 * A *special* `util` `isObject` method (actually a convenience method)
 * which strictly accepts objects except arrays
 *
 * @param {mixed} arg Value to be checked
 * @param {Object} validation options
 * @return {boolean}
 */
module.exports = function(arg, opt) {
  // opt = {
  //   undfn: true
  //   strict : true
  // }
  return (opt && opt.undfn && ? arg !== undefined : true)
    && (opt && !opt.strict ? true : !Array.isArray(arg))
    && typeof arg == 'object';
}