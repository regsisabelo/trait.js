"use strict";

/**
 * Get all methods listed to the trait
 * @returns {object} methods
 */
module.exports = function methods() {
  var listOfMethods = {};
  this.each(function (methodName, methodFunction) {
    methods[methodName] = methodFunction;
  });

  return listOfMethods;
};