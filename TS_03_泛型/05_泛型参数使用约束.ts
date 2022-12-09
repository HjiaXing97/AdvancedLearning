interface IKun {
    name: string
    age: number
    height: number
}

type IkunType = keyof IKun  //"name" | "age" | "height"

/**
 * @param obj
 * @param key keyof O 表示k必须是O中的属性
 */
function getObjectProperty<O, K extends keyof O>(obj: O, key: K) {
    return obj[key]
}

const obj: IKun = {
    name: 'hjx',
    age: 25,
    height: 1.88
}

const name = getObjectProperty(obj, 'age')

export {}