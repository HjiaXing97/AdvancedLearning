/**
 * @param {number} m
 * @param {number} n
 * @param  {...any} args  剩余参数
 * @returns {number}  求和
 */
const foo = (m, n, ...args) => {
  console.log(args);

  return n + m;
};

foo(1, 2, 3, 4);
