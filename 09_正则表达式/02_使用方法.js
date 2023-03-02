
const reg = /^abc$/ig
const message='abccbaacbcccacbacbabc'
/* test方法  判断是否符合规则*/
// if(reg.test(message)){
// 	console.log('message符合规则')
// }else{
// 	console.log('message不符合规则')
// }

/* 使用字符串方法，传入一个正则表达式
* match方法
*/

const result = message.match(/abc/i)
console.log(result)