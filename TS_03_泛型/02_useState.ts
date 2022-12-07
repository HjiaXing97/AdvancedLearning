/**
 * @param initialState 初始State
 */
function useState<T>(initialState: T): [T, (newState: T) => void] {
    let state = initialState

    function setState(newState: T): void {
        state = newState
    }

    return [state, setState]
}

const [count, setCount] = useState<number>(100)
export {}
