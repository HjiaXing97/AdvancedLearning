const inputEl = document.querySelector("input");
inputEl.oninput = useDebounce(function (event) {
  console.log(event);
  console.log(this.value);
});

function useDebounce(fn, delay = 500) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}
