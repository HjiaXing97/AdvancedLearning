const message = 'my name is aaa'

/*匹配name单词  左右两边不能有数字、英文字符*/
if(/\bname\b/ig.test(message)){
	console.log(1)
}