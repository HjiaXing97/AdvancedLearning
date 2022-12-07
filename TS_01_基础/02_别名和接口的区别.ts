/**
 * 1. 别名不能同名,接口可以同名
 * 2. interface可继承
 * 3. interface可以被类实现
 */
interface point {
    x: number
    y: number
}

interface IPoint extends point{
    z?: number
}

const point: IPoint = {
    x: 1, y: 2
}

console.log(point)