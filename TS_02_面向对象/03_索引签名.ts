interface ICollection {
    [index: number]: string
    length: number
}

function printCollection(collection: ICollection) {
    for (let i = 0; i < collection.length; i++) {
        console.log(collection[i])
    }
}

const array = ['hjx', 'cp']
const tuple = ['1', '2', '3']

printCollection(array)
printCollection(tuple)
