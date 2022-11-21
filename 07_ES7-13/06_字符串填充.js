const m = '15'.padStart(2, '0')
const s = '5'.padStart(2, '0')
//应用场景：日期格式化
console.log(`${m}:${s}`)

//隐藏身份证
const card = '420922199702163418'
const sliceNum = card.slice(-4)

console.log(sliceNum.padStart(18, '*'))
