interface IKun {
    name: string
    age: number
}

interface ICoder {
    name: string
    code: () => void
}

const coder: ICoder & IKun = {
    name: 'hjx',
    age: 25,
    code: function () {

    }
}