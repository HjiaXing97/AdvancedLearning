const obj = {
  name: "hjx",
  age: 26,
};
let keys = Object.keys(obj);
for (let key of keys) {
  let value = obj[key];

  Object.defineProperty(obj, key, {
    set: function (newValue) {
      console.log(`监听：${key}的属性修改了`);
      value = newValue;
    },
    get: function () {
      console.log(`监听:获取${key}的值`);
      return value;
    },
  });
}

obj.age = 22;
obj.name = "cp";

console.log(obj.age);
console.log(obj.name);
