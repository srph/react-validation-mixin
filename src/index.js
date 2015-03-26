var util = require('./utils/index');

/**
 *
 */
module.exports = function(rules, handler, extension) {
  // We'll be bail when the provided arguments are invalid.
  // This will be an if-else instead of an if-if because 
  // if-if was some bizarre shit to read.
  if ( !util.isObject(rules) ) {
    throw new Error('The rules (' + rules + ') is not an object.');
  } else if ( !util.isObject(extension) ) {
    throw new Error('The stateNames (' +  stateNames + ') you provided is not an object.');
  }

  return {
    getInitialState: function() {
      // Fields that have errors and touched
      return { errors: {}, touched: [] };
    },

    /**
     * Runs the provided handler, with the mixin / component's context
     *
     * @param {Object} data
     */
    handleValidation: function(data) {
      handler.bind(this)(data);
    },

    /**
     *
     */
    handleTouches: function(field) {
      var touched = this.state.touched;

      if ( touched.indexOf(field) == -1 ) {
        touched.push(field);
        this.setState({ touched: touched });
      }
    },

    /**
     * Shorthand convenience method to check if
     * the prop is in the list of touched fields
     *
     * @param {string}
     * @return {boolean}
     */
    isTouched: function(field) {
      return this.state.touched.indexOf(field) == -1;
    }
  }
};