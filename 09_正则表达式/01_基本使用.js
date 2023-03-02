const message = "ab323c Abcds AA454A212bc dskljbac acbhdsjdwwwd434jksabc 4343";

// 将所有的abc替换成cba，不区分大小写
const r1 = message.replaceAll(/abc/gi, "cba");

//去除字符串中的数字
const r2 = message.replaceAll(/\d/gi, "");
console.log(r1);
console.log(r2);
