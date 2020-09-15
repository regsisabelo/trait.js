"use strict";

/**
 * Iterate to all traits listed
 * @param {function} callback
 */
module.exports = function each(callback) {
  if (typeof callback !== "function")
    throw new Error("Each method parameter must be a callback function");

  this.$traits.forEach((trait) => {
    // iterate the methods
    for (let method in trait) {
      const METHOD_FUNCTION = trait[method];
      const METHOD_NAME = method;

      // verify the method's existence
      if (trait.hasOwnProperty(METHOD_NAME)) {
        callback.apply(this, [METHOD_NAME, METHOD_FUNCTION]);
      }
    }
  });

  return this;
};
