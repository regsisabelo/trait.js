"use strict";

module.exports = function inheritTo(klass) {
  const KLASS_PROTOTYPE = klass.prototype || klass;

  return this.each((method_name, method_function) => {
    // if method already exists, skip
    if (KLASS_PROTOTYPE[method_name]) return;

    // attempt to inherit the methods to the class
    KLASS_PROTOTYPE[method_name] = method_function;
  });
};
