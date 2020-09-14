"use strict";

function Trait(methods) {
  if (typeof methods !== "object") return this;

  this.$traits = [methods];
}

Trait.prototype.inheritTo = require("./methods/inherit_to");

const trait = (methods) => new Trait(methods);

module.exports = trait;
module.exports.trait = trait;
module.exports.default = trait;
module.exports.Trait = Trait;
