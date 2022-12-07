/**
 * 在第一次创建对象的时候会进行严格的类型检测
 */

interface IPerson {
    name: string
    age: number
}

const obj = {
    name: 'hjx',
    age: 23,
    height: 1.88
}
const person: IPerson = obj
// console.log(person.height)

const arr = [1, 2, 3, 4, 5, 6, 7]
arr.forEach((item) => {
    console.log('item-----',item)
})