"use strict";

module.exports = function inheritTo(klass) {
  const KLASS_PROTOTYPE = klass.prototype;
  this.$traits.forEach((trait) => {
    // iterate the methods
    for (let method in trait) {
      const METHOD_FUNCTION = trait[method];
      const METHOD_NAME = method;

      // verify the method's existence
      if (trait.hasOwnProperty(METHOD_NAME)) {
        // if method already exists, skip
        if (KLASS_PROTOTYPE[METHOD_NAME]) return;

        // attempt to inherit the methods to the class
        KLASS_PROTOTYPE[METHOD_NAME] = METHOD_FUNCTION;
      }
    }
  });

  return this;
};
