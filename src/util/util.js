export const util = {
    getRandomNumber(min, max) {
        return  Math.ceil(Math.random() * (+max - +min) + +min)
    }
}
