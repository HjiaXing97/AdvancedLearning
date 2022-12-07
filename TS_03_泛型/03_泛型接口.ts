interface IType<T> {
    index: T
}


const obj: IType<number> = {
    index: 2
}

const obj3: IType<string> = {
    index: 'cp'
}

