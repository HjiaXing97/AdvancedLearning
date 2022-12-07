function bar<T>(arg: T): T {
    return arg
}


const res1 = bar<number>(12)

const res2 = bar<string>('222')