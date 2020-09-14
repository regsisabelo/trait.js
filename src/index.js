import Trait from "./trait";

const trait = (methods) => new Trait(methods);

module.exports = trait;
module.exports.trait = trait;
module.exports.default = trait;
module.exports.Trait = Trait;
