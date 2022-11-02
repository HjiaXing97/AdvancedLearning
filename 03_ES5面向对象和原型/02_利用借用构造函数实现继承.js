function Person(name, age) {
  this.age = age;
  this.name = name;
}

function Student(name, age, sNo) {
  Person.call(this, name, age);
  this.sNo = sNo;
}


