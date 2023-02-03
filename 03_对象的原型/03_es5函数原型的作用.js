function Foo() {
  this.eating = function () {
    console.log("eating");
  };
}

Foo.prototype.running = function () {
  console.log("running");
};

const foo = new Foo();
const foo1 = new Foo();

foo.running();
foo.eating();

console.log(foo1.__proto__ === foo.__proto__); //true
console.log(foo1.running === foo.running); //true
console.log(foo1.eating === foo.eating); //false
