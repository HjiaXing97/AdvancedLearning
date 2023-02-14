function foo(name, age, aaa) {
  console.log(this);
  console.log(name);
  console.log(age);
  console.log(aaa);
}

Function.prototype.jxBind = function (thisArg, ...args) {
  thisArg =
    thisArg === undefined || thisArg === null ? window : Object(thisArg);

  return (...fnArgs) => {
    thisArg.fn = this;
    thisArg.fn(...args, ...fnArgs);
  };
};

const newFoo = foo.jxBind(123, "hjx", 23);

newFoo();
