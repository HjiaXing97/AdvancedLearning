interface ISwim {
    swim: () => void
}

interface IRun {
    run: () => void
}

/**
 * in 判断对象中是否有某个key
 * @param animal
 */
function move(animal: IRun | ISwim) {
    if ('swim' in animal) {
        animal.swim()
    }

    if ('run' in animal) {
        animal.run()
    }
}