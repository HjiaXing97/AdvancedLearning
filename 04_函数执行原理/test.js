const arr = [
  {
    value: 1,
    label: 1,
  },
  {
    value: 3,
    label: 1,
  },
  {
    value: 5,
    label: 1,
  },
  {
    value: 2,
    label: 1,
  },
  {
    value: 4,
    label: 1,
  },
];

const testArr = arr.sort((a, b) => a.value - b.value);
console.log(testArr);
