class Person {
  constructor(name, age) {
    this.age = age;
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

const p1 = new Person("hjx", 26);

p1.getName();
console.log(p1);
