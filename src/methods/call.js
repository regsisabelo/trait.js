"use strict";

/**
 * Call a method from a trait using the method name
 * @param {string} method_name
 */
module.exports = function call(method_name) {
  let METHOD = null;

  this.$traits.forEach((trait) => {
    if (trait[method_name]) METHOD = trait[method_name];
  });

  if (!METHOD) throw new Error(`${method_name} does not exist on ${this.name}`);

  return METHOD.apply(this);
};
