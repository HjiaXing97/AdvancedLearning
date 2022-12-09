type Person<T> = {
    [property in keyof T]: T[property]
}

interface IPerson {
    name: string
    age: number
}

type MapType = Person<IPerson>