"use strict";

/**
 * Call a method from a trait using the method name
 * @param {string} methodName
 */
module.exports = function call(methodName) {
  var METHOD = null;

  this.$traits.forEach(function (trait) {
    if (trait[methodName]) {
      METHOD = trait[methodName];
    }
  });

  if (!METHOD) {
    throw new Error(methodName + " does not exist on " + this.name);
  }

  return METHOD.apply(this);
};