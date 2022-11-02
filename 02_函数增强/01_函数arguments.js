function foo(m, n) {
  /**
   * arguments 转数组
   * @type {*[]}
   */
  const newArguments = [];
  for (let i of arguments) {
    newArguments.push(i);
  }

  const newArr = Array.from(arguments);
  const newArr2 = [...arguments];
  const newArr3 = [].slice.apply(arguments);

  console.log("arguments", arguments);
  console.log("newArguments", newArguments);
  console.log("newArr", newArr);
  console.log("newArr2", newArr2);
  console.log("newArr3", newArr3);
}

foo(1, 2, 3, 43, 5, 6, 7, 7, 8);
