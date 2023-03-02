/* 匹配所有的数字*/
const reg1 = /\d+/ig
const reg2 = /[0-9]{4}/ig
const message = '13231hjhjs2323hjsa3234jhd2'

console.log(message.match(reg1))
console.log(message.match(reg2))
