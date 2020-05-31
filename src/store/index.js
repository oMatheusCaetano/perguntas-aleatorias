import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    requiredQuestions: [
      'Me informe por favor seu CPF',
      'Me informe por favor seu nome completo',
      'Me informe por favor sua data de nascimento',
    ],

    requiredPjQuestion: 'Em que ano sua empresa foi aberta?',

    randomPfQuestions: [
      'Por favor me informe o nome completo da sua mãe',
      'Qual é o seu signo?',
      'Me informe por gentileza o último sobrenome da sua mãe?'
    ],

    randomPjQuestions: [
      'Qual é a atividade da sua empresa?',
      'Qual o endereço da sua empresa?',
      'Me informe por gentileza o último sobrenome da sua mãe?'
    ]
  }
})
