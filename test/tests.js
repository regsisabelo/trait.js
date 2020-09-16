const fs = require('fs');
const { expect } = require('chai');
const { describe, it } = require('mocha');
const trait = require('../dist');

const SAMPLE = {
  testMethod() {
    return 'test';
  },
};

class TestClass {
}

describe('trait.js testing', () => {
  trait(SAMPLE).in(TestClass);
  const sampleClassInstance = new TestClass('test');

  it('Inherit trait methods', () => {
    expect(sampleClassInstance.testMethod()).to.equal('test');
  });

  it("Iteration test using 'each'", () => {
    trait(SAMPLE).each((name, method) => {
      describe('iterator callback test', () => {
        it('should have a name testMethod', () => {
          expect(name).to.equal('testMethod');
        });
        it("should return a 'test' string", () => {
          expect(method.apply()).to.equal('test');
        });
      });
    });
  });

  it('Manual method call testing', () => {
    const result = trait(SAMPLE).call('testMethod');
    expect(result).to.equal('test');
  });

  it('Get list of methods from the trait', () => {
    const result = trait(SAMPLE).methods();
    expect(typeof result).to.equal('object');
  });

  it('should not have any dependencies', () => {
    const content = fs.readFileSync('package.json');
    const pckg = JSON.parse(content);

    expect(pckg.dependencies).to.eql({});
  });
});
