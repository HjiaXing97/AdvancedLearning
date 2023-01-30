const age = "window";

const person = {
  age: "person",
  sayName: function () {
    console.log(this.age);
  },
};

function sayName() {
  const sss = person.sayName;
  sss();
  person.sayName();
  person.sayName();
  (p = person.sayName)();
}

sayName();
