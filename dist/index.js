'use strict';

function Trait() {
  this.name = 'Trait';

  for (var _len = arguments.length, methods = Array(_len), _key = 0; _key < _len; _key++) {
    methods[_key] = arguments[_key];
  }

  this.$traits = methods;
}

Trait.prototype.inheritTo = require('./methods/inherit_to');
Trait.prototype.call = require('./methods/call');
Trait.prototype.each = require('./methods/each');
Trait.prototype.methods = require('./methods/methods');

Trait.prototype.in = Trait.prototype.inheritTo; // a shorthand for inhertTo

var trait = function trait(methods) {
  return new Trait(methods);
};

module.exports = trait;
module.exports.trait = trait;
module.exports.default = trait;
module.exports.Trait = Trait;