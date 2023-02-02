function foo(n, m) {
  console.log(arguments);
  // from方法的参数 必须是一个可迭代对象
  // 讲arguments转为数组
  const arr = Array.from(arguments);
  console.log(arr);

  const arr2 = new Array(...arguments);
  console.log(arr2);

  const arr3 = [].slice.apply(arguments);
  console.log(arr3);
}

foo(1, 2, 3, 4, 5);
