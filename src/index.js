module.exports = function(rules, handler) {
  // We'll be bail when the provided argument is undefined or a non-object
  if ( rules == undefined || typeof rules !== 'object' || Array.isArray(rules) ) {
    throw new Error('The rules provided must be an object.');
  }

  return {
    getInitialState: function() {
      // Fields that have errors and touched
      return { errors: {}, touched: [] };
    },

    /**
     *
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
      return this.state.touched.indexOf(field) == -1
    }
  }
};