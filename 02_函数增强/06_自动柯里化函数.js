function logInfo(date, type, message) {
  return `时间：${date}-类型：${type}-内容：${message}`;
}

/**
 * @param {function} fn
 */
function currying(fn) {
  // 第一类操作返回新的函数，接收新的参数
  // 第二类操作：直接执行fn函数

  function curryFn(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (...newArgs) {
        return curryFn(...args, ...newArgs);
      };
    }
  }

  return curryFn;
}
debugger;
const newFun = currying(logInfo);
let a = newFun("2012")("success")("success");
console.log(a);
