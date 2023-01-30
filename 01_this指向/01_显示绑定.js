const obj = {
  bar: function () {
    console.log(this);
  },
};

function bar(fn) {
  fn();
}

bar(obj.bar);
