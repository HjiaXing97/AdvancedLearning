async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}

async function async2() {
  console.log("async2");
}

console.log("script start");

setTimeout(() => {
  console.log("setTimeout");
});

async1();

new Promise((resolve) => {
  console.log("Promise");
  resolve();
}).then(() => {
  console.log("then");
});

console.log("script end");

//script start
//async1 start
//async2
//Promise
//script end
//async1 end
//then
//setTimeout
