const promise1 = new Promise((resolve, reject) => {
  resolve("1111");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("22222");
  }, 1000);
});

promise1
  .then((res) => {
    console.log(res);
    /**
     * 如果这里返回一个Promise ，则19行的then的状态是由这个Promise来决定
     * 每一个Promise的then都会返回一个新的Promise
     */
    return promise2;
  })
  .then((res) => {
    console.log(res);
  });
