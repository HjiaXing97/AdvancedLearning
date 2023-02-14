const obj = {
  name: "cp",
};
const objProxy = new Proxy(obj, {
  set(target, key, newValue, receiver) {
    console.log(receiver);
    const isSuccess = Reflect.set(target, key, newValue);
    if (!isSuccess) {
      throw new Error(`${key} 操作失败`);
    }
  },
});

objProxy.name = "cp";

console.log(objProxy);
console.log(obj);
