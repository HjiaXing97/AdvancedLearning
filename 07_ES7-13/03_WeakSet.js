let o1 = {age: 11}
let o2 = {age: 12}
let o3 = {age: 13}
//数组arr中存放的是内存地址
let arr = [o1, o1, o3]

//将o1，2，3的值变为null，原对象的引用地址在arr中还存在引用关系
o1 = null
o2 = null
o3 = null

console.log(arr)
console.log(o1)
console.log(o3)

s1 = new Set(arr)
// arr = null
console.log(s1, arr)


/**
 * WeakSet和set的区别
 * 1 . 只能存放对象类型
 * 2 . WeakSet中存放的数据是弱引用，可能会被内存回收
 * 3 . WeakSet不能被遍历
 */
let ws1 = new WeakSet()
ws1.add({name: 1})
console.log(ws1)
