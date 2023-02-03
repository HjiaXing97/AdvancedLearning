function Person() {}

Person.prototype.running = function () {
  console.log("running");
};

function Student() {}

const p1 = new Person();
Student.prototype = p1;

const stu1 = new Student();
stu1.running();
console.log(p1.__proto__ === stu1.__proto__.__proto__);
console.log(stu1.__proto__ === p1);
