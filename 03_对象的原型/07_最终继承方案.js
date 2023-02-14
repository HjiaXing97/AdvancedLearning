/**
 * @description 通过Object.create创建一个隐式原型指向父类显示原型的对象
 * @param {Function} subType 字类
 * @param {Function} superType  父类
 */

function inherit(subType, superType) {
  subType.prototype = Object.create(superType.prototype);
  Object.defineProperty(subType.prototype, "constructor", {
    writable: true,
    enumerable: false,
    value: subType,
  });
}

function Person(name, age) {
  this.age = age;
  this.name = name;
}

Person.prototype.running = function () {
  console.log("11111111111", this.name);
};

function Student(name, age, sNo) {
  Person.call(this, name, age);
  this.sNo = sNo;
}

inherit(Student, Person);

Student.prototype.eating = function () {
  console.log("eating", this.name);
};
const stu1 = new Student("hjx", 26, 111);

stu1.running();
stu1.eating();
console.log(stu1);
console.log(Student.prototype);
