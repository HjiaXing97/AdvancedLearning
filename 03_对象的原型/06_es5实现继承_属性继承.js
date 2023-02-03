function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Student(name, age, sNo, address) {
  //借用构造函数
  Person.call(this, name, age);

  this.sNo = sNo;
  this.address = address;
}

const stu1 = new Student("hjx", 26, 100001, "深圳");
console.log(stu1);
