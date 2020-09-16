'use strict';

/**
 * Iterate to all traits listed
 * @param {function} callback
 */
module.exports = function each(callback) {
  var _this = this;

  if (typeof callback !== 'function') {
    throw new Error('Each method parameter must be a callback function');
  }

  this.$traits.forEach(function (trait) {
    // iterate the methods
    Object.keys(trait).forEach(function (method) {
      // verify the method's existence
      if (Object.prototype.hasOwnProperty.call(trait, method)) {
        var METHOD_FUNCTION = trait[method];
        var METHOD_NAME = method;
        callback.apply(_this, [METHOD_NAME, METHOD_FUNCTION]);
      }
    });
  });

  return this;
};