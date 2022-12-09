interface ILength {
    length: number
}

function getLength(arg: ILength): number {
    return arg.length
}

const length1 = getLength('11111')
const length2 = getLength([1, 2, 3])
const length3 = getLength({length: 3})


function getInfo<T extends ILength>(arg: T): T {
    return arg
}

const info1 = getInfo('11111')
const info2 = getInfo([2, 3])