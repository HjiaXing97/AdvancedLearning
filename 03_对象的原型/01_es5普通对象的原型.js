const obj = {
  name: "hjx",
};

obj.__proto__.message = "hello";

//获取对象的原型
console.log(obj.name);
console.log(obj.__proto__); // 非标准形式
console.log(Object.getPrototypeOf(obj)); //标准形式
console.log(Object.getPrototypeOf(obj) === obj.__proto__);
