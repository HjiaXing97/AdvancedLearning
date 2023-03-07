function useDebounce(fn, delay = 2000) {
  let timer = null;
  if (timer) clearTimeout(timer);

  const _debounce = function (...args) {
    setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };

  _debounce.cancel = function () {
    console.log(111);
    if (timer) clearTimeout(timer);
  };
  return _debounce;
}

const inputEl = document.querySelector("input");
const btnEl = document.querySelector("button");

const debounce = useDebounce(function (event) {
  console.log(this);
  console.log(event);
});

inputEl.oninput = debounce;
btnEl.onclick = function () {
  debounce.cancel();
};
