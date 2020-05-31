export default {
  SET_TABLE_QUESTIONS(state, questions) {
    state.tableQuestions = questions
  },

  CLEAR_TABLE(state) {
    state.tableQuestions = []
  },
}
