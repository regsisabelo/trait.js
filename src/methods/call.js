/**
 * Call a method from a trait using the method name
 * @param {string} methodName
 */
module.exports = function call(methodName) {
  let METHOD = null;

  this.$traits.forEach((trait) => {
    if (trait[methodName]) {
      METHOD = trait[methodName];
    }
  });

  if (!METHOD) {
    throw new Error(`${methodName} does not exist on ${this.name}`);
  }

  return METHOD.apply(this);
};
