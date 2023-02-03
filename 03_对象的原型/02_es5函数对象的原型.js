/**
 * new 操作符做了什么
 * 1. 创建一个空对象
 * 2. 将这个空对象赋值给this
 * 3. 将函数的显示原型指向这个对象的隐式原型
 * 4. 执行函数中的代码
 * 5. 返回这个对象
 */

function foo() {}

console.log(foo.prototype);

function Bar() {}
const bar1 = new Bar();

console.log(Bar.prototype === bar1.__proto__);
