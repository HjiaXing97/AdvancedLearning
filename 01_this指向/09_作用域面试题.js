var n = 100;

//面试一
// function foo(params) {
//   console.log(n);
//   var n = 200;
//   console.log(n);
// }

// foo();

// 面试题二
// function foo1(params) {
//   console.log(n); //100
// }

// function foo2(params) {
//   var n = 200;
//   console.log(n); //200
//   foo1();
// }

// foo2();

//面试题三
// function foo(params) {
//   console.log(n); //undefined
//   return;
//   var n = 200;
// }

// foo();

//面试题四

function foo(params) {
  var n = (b = 200);
}
foo();
console.log(n); //100
console.log(b); //200
