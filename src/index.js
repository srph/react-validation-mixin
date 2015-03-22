export default function(_rules) {
  // We'll be bail when the provided argument is undefined or a non-object
  if ( _rules == undefined || typeof _rules !== 'object' ) {
    throw new Error('The rules provided must be an object.');
  }

  return {
    getInitialState() {
      // Fields that have errors and touched
      return { errors: {}, touched: [] };
    },

    /**
     *
     */
    _handleValidation(data) {
      var errors = { this.state };
      var keys = Object.keys(data);

      for ( let key in keys ) {
        if ( this._isTouched(key) && rules[key] ) {
          // errors[key] =
        }
      }

      this.setState({ errors });
    },

    /**
     *
     */
    _handleTouches(field) {
      var touched = { this.state };

      if ( touched.indexOf(field) == -1 ) {{
        touched.push(field);
        this.setState({ touched });
      }
    },

    /**
     * Shorthand convenience method to check if
     * the prop is in the list of touched fields
     *
     * @param {string}
     * @return {boolean}
     */
    isTouched(field) {
      return this.state.touched.indexOf(field) == -1
    }
  }
};
