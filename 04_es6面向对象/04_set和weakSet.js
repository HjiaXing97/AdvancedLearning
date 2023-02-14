const obj1 = {
  name: "hjx",
};
const obj2 = {
  name: "cp",
};

const arr = [obj1, obj2];

/**
 * set :强引用，可放任何数据类型
 * WeakSet : 弱引用，只能存放复杂数据类型 ，不可被遍历
 * 弱引用 : 可能会被垃圾回收的
 */
const set = new Set(arr);

const set1 = new WeakSet();
set1.add(obj1);
set1.add(obj2);
