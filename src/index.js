"use strict";

function Trait(methods) {
  if (typeof methods !== "object") return this;

  this.name = "Trait";
  this.$traits = [methods];
}

Trait.prototype.inheritTo = require("./methods/inherit_to");
Trait.prototype.call = require("./methods/call");

const trait = (methods) => new Trait(methods);

module.exports = trait;
module.exports.trait = trait;
module.exports.default = trait;
module.exports.Trait = Trait;
