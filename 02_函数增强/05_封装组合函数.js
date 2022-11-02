function double(num) {
  return num * 2;
}

function pow(num) {
  return num ** 2;
}

function composeFn(...fns) {
  for (let fn of fns) {
    if (typeof fn !== "function") {
      throw new Error(`${fn} is not a function`);
    }
  }
  return function (...args) {};
}

const foo = composeFn(double, pow);

foo(3);
