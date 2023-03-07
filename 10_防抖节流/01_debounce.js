const inputEl = document.querySelector('input')

inputEl.oninput = useDebounce(function (event){
	console.log(this.value)
	console.log(event)
},500)

/**
 * @param fn {function} 触发函数
 * @param delay {number}  触发时间
 * @returns {(function(): void)|*}
 */
function useDebounce(fn,delay= 1000){
	let timer = null
	return function (...args){
		if (timer) clearTimeout(timer)
		timer = setTimeout(() => {
			fn.apply(this,args)
		},delay)
	}
}