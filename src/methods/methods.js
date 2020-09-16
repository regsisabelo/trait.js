/**
 * Get all methods listed to the trait
 * @returns {object} methods
 */
module.exports = function methods() {
  const listOfMethods = {};
  this.each((methodName, methodFunction) => {
    methods[methodName] = methodFunction;
  });

  return listOfMethods;
};
