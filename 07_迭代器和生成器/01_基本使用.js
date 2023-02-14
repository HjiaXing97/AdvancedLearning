const infos = {
  friends: [1, 2, 3, 4, 5],
  [Symbol.iterator]() {
    let index = 0;
    const infosIterator = {
      next: () => {
        console.log(this);
        if (index < this.friends.length) {
          return {
            done: false,
            value: this.friends[index++],
          };
        } else {
          return {
            done: true,
          };
        }
      },
    };

    return infosIterator;
  },
};

const iteratorFn = infos[Symbol.iterator]();
console.log(iteratorFn);
console.log(iteratorFn.next());
