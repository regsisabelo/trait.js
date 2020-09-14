"use strict";

module.exports = function inheritTo(klass) {
  const KLASS_PROTOTYPE = klass.prototype;
  for (let trait_index = 0; trait_index < this.$traits.length; ++trait_index) {
    // get the list of methods each trait
    let methods = this.$traits[trait_index];

    // iterate the methods
    for (let method in methods) {
      const METHOD_FUNCTION = methods[method];
      const METHOD_NAME = method;

      // verify the method's existence
      if (methods.hasOwnProperty(METHOD_NAME)) {
        // if method already exists, skip
        if (KLASS_PROTOTYPE[METHOD_NAME]) return;

        // attempt to inherit the methods to the class
        KLASS_PROTOTYPE[METHOD_NAME] = METHOD_FUNCTION;
      }
    }
  }

  return this;
};
