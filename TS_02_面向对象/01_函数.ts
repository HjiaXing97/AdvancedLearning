function foo(this: { name: string }, info: { age: number }) {
    console.log(this)
    console.log(info)
}

type FooType = typeof foo

type FooThisType = ThisParameterType<FooType>

interface IState {
    name: string
    age: number
}

interface IStore {
    state: IState
    running: () => void
    eating: () => void
}

const store: IStore & ThisType<IState> = {
    state: {
        name: 'hjx',
        age: 20
    },
    eating() {
        console.log(this.age)
    },
    running() {
        console.log(this.name)
    }
}

store.running()