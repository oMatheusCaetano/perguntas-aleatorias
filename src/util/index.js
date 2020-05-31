export default {
  getRandomNumber: (min, max) => Math.ceil(Math.random() * (+max - +min) + +min),
}
