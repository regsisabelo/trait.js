"use strict";

const { Trait } = require("../dist");

const TestTrait = new Trait({
  print() {
    console.log("Foo");
  },
});

class Model {}
TestTrait.inheritTo(Model);

let model = new Model();

model.print();
