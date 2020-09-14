/**
 * Trait - a class that helps to create an inheritable object methods.
 * Any method listed to the Trait constructor can be inherited to a specific class
 * using the "use" method which would require to pass a class
 */
export default class Trait {
  // list of methods
  $traits = [];

  constructor(methods) {
    this.$traits = [methods];
  }

  /**
   * Inherit traits to a class
   * @param {Model} klass
   * @returns {Trait}
   */
  inheritTo(klass) {
    const KLASS_PROTOTYPE = klass.prototype;

    // iterate each traits
    this.each((method_name, method_function) => {
      // if method already exists, skip
      if (KLASS_PROTOTYPE[method_name]) return;

      // attempt to inherit the methods to the class
      KLASS_PROTOTYPE[method_name] = method_function;
    });

    return this;
  }

  /**
   * Iterate through the traits
   * @param {function} callback
   * @returns {Trait} this
   */
  each(callback) {
    // iterate for the list of methods
    for (
      let trait_index = 0;
      trait_index < this.$traits.length;
      ++trait_index
    ) {
      // get the list of methods each trait
      let methods = this.$traits[trait_index];

      // iterate the methods
      for (let method in methods) {
        const METHOD_FUNCTION = methods[method];
        const METHOD_NAME = method;

        // verify the method's existence
        if (methods.hasOwnProperty(METHOD_NAME)) {
          if (callback && typeof callback === "function") {
            callback.apply(this, [METHOD_NAME, METHOD_FUNCTION]);
          }
        }
      }
    }

    return this;
  }
}
