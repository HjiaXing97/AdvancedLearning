const obj = {name: 'hjx'}
const info = new WeakRef(obj)
console.log(info.deref())