module.exports = function inheritTo(klass) {
  const KLASS_PROTOTYPE = klass.prototype || klass;

  return this.each((methodName, methodFunction) => {
    // if method already exists, skip
    if (KLASS_PROTOTYPE[methodName]) {
      return;
    }

    // attempt to inherit the methods to the class
    KLASS_PROTOTYPE[methodName] = methodFunction;
  });
};
