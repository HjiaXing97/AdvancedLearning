function inherit(SubType, SuperType) {
  // Object.create创建一个新对象，使用SuperType.prototype来作为新创建对象的原型
  //所以此时字类的原型对象指向父类的原型对象
  SubType.prototype = Object.create(SuperType.prototype);
  Object.defineProperty(SubType.prototype, "constructor", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: SubType,
  });
}
