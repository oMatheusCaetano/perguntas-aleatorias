import Util from '../util'

export default {
  loadPfQuestions(context) {
    context.commit('CLEAR_TABLE')
    const randomNumber = Util.getRandomNumber(
      -1,
      context.state.randomPfQuestions.length - 1,
    )
    const questions = [...context.state.requiredQuestions]
    questions.push(context.state.randomPfQuestions[randomNumber])
    context.commit('SET_TABLE_QUESTIONS', questions)
  },

  loadPjQuestions(context) {
    context.commit('CLEAR_TABLE')
    const randomNumber = Util.getRandomNumber(
      -1,
      context.state.randomPjQuestions.length - 1,
    )
    const questions = [...context.state.requiredQuestions]
    questions.push(context.state.requiredPjQuestion)
    questions.push(context.state.randomPjQuestions[randomNumber])
    context.commit('SET_TABLE_QUESTIONS', questions)
  },

}
