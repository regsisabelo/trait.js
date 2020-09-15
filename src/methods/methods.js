"use strict";

/**
 * Get all methods listed to the trait
 * @returns {object} methods
 */
module.exports = function methods() {
  let methods = {};
  this.each((method_name, method_function) => {
    methods[method_name] = method_function;
  });

  return methods;
};
