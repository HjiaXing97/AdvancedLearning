/**
 * @description 纯函数，相同的输入一定会返回相同的输出，不能产生副作用
 * @param {number} m
 * @param {number} n
 * @returns {number}  返回m+n的和
 */

function add(m, n) {
  return m + n;
}

const a = add(1, 2);
const b = add("2", "4");

console.log(a);
console.log(b);
