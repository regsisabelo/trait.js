"use strict";

const trait = require("../dist");

const TestTrait = trait({
  print() {
    console.log("Foo");
    return "bar";
  },
});

let Model = function () {};
TestTrait.in(Model);

let model = new Model();

model.print();
