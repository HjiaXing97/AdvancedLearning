function componseFn(...fns) {
  const length = fns.length;

  if (length === 0) return;

  for (let i = 0; i < length; i++) {
    const fn = fns[i];
    if (typeof fn !== "function") {
      throw new Error(`第${i + 1}个必须是一个函数`);
    }
  }

  return function (...args) {};
}

function pow(num) {
  return num ** 2;
}

function double(num) {
  return num * 2;
}
console.log(componseFn(pow, double));
