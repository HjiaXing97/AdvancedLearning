const obj = {
  name: "hjx",
  age: 26,
};

const objProxy = new Proxy(obj, {
  get: function (target, key) {
    console.log(`监听:获取${key}`);
    return target[key];
  },
  set: function (target, key, newValue) {
    console.log(`监听:设置${key}`);
    target[key] = newValue;
  },
  deleteProperty(target, key) {
    console.log(`监听:删除${key}`);
    delete target[key];
  },
  has(target, key) {
    console.log(`监听:in 操作${key}`);
    return [key] in target;
  },
});

objProxy.name = "xp";
console.log(objProxy.name);
delete objProxy.name;
console.log("age" in objProxy);
console.log(objProxy);
console.log(obj);
