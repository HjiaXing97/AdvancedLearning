function Person() {}

function running() {}
Person.prototype = {
  message: 111,
  running: running,
};

Object.defineProperty(Person.prototype, "constructor", {
  enumerable: false,
  value: Person,
  writable: true,
});

console.log(Object.keys(Person.prototype));
console.log(Person.prototype);
