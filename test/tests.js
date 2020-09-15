"use strict";

const trait = require("../dist");

const TestTrait = trait({
  print() {
    console.log("Foo");
    return "bar";
  },
});

let Model = {};
TestTrait.in(Model);

Model.print();
