"use strict";

function Trait(...methods) {
  this.name = "Trait";
  this.$traits = methods;
}

Trait.prototype.inheritTo = require("./methods/inherit_to");
Trait.prototype.call = require("./methods/call");
Trait.prototype.in = Trait.prototype.inheritTo;

const trait = (methods) => new Trait(methods);

module.exports = trait;
module.exports.trait = trait;
module.exports.default = trait;
module.exports.Trait = Trait;
