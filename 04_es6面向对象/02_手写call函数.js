function foo(name, age) {
  console.log(this);
  console.log(name);
  console.log(age);
}

Function.prototype.jxCall = function (thisAge, ...args) {
  thisAge =
    thisAge === undefined || thisAge === null ? window : Object(thisAge);

  thisAge.fn = this;
  thisAge.fn(...args);
};

Function.prototype.jxApply = function (thisAge, args) {
  thisAge =
    thisAge === undefined || thisAge === null ? window : Object(thisAge);
  thisAge.fn = this;
  thisAge.fn(...args);
};

foo.jxCall(1, "hjx", 26);
foo.jxApply(
  {
    name: "hjx",
  },
  ["hjx", 26]
);
