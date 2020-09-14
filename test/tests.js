"use strict";

const trait = require("../dist");

const TestTrait = trait({
  print() {
    console.log("Foo");
    return "bar";
  },
});

let Model = function () {};
TestTrait.inheritTo(Model);

let model = new Model();

TestTrait.call("print").then((response) => {
  console.log(response);
});
