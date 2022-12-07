interface IIndexType {
    // [index: string]: string  报错 因为数组中还存在forEach()、map等方法
    [index: string]: any
}

const arr: IIndexType = ['1', '2']