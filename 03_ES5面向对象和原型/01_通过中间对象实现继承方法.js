function Person(name, age) {
  this.age = age;
  this.name = name;
}

Person.prototype.running = function () {
  console.log(`${this.name} is running`);
};

function Student(name, age, sNo) {
  this.age = age;
  this.name = name;
  this.sNo = sNo;
}
// 创建一个Person的实例，将Student类的原型对象指向p
const p = new Person();
Student.prototype = p;
Student.prototype.studying = function () {
  console.log(`${this.name} is studying`);
};

const student = new Student('hjx', 12, 100001)
student.running()
student.studying()