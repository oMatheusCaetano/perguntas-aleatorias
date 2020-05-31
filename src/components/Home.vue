<template>
  <div>
    <div class="container">
      <img
        class="mx-auto d-block mb-4 mt-3"
        height="100"
        src="../assets/img/logo.png"
        alt="soluti"
      />

      <div class="form-group">
        <label for="certificate_type">Escolha uma das opções abaixo</label>
        <select
          class="form-control"
          id="certificate_type"
          v-model="certificateType"
        >
          <option value="certificate_pf">Certificado Pessoa Física</option>
          <option value="certificate_pj">Certificado Pessoa Jurídica</option>
        </select>
      </div>

      <div class="form-group">
        <button class="btn btn-success btn-sm" @click="loadQuestions()">
          Carregar Perguntas
        </button>
        <button class="btn btn-danger btn-sm ml-3" @click="refreshPage()">
          Limpar Lista
        </button>
      </div>

      <div>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th class="col-10" scope="col">Pergunta</th>
              <th class="col-2" scope="col">Realizada</th>
            </tr>
          </thead>
          <tbody v-for="question in tableQuestions" :key="question">
            <tr>
              <td>{{ question }}</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <small class="text-secondary float-right"
        >Limpe a lista de perguntas antes de carregar novas perguntas</small
      >
    </div>
  </div>
</template>

<script>
import { util } from '../util/util'

export default {
  data() {
    return {
      certificateType: '',

      //   tableQuestions: [],

      //   requiredQuestions: [
      //     'Me informe por favor seu CPF',
      //     'Me informe por favor seu nome completo',
      //     'Me informe por favor sua data de nascimento',
      //   ],

      //   requiredPjQuestion: 'Em que ano sua empresa foi aberta?',

      //   randomPfQuestions: [
      //     'Por favor me informe o nome completo da sua mãe',
      //     'Qual é o seu signo?',
      //     'Me informe por gentileza o último sobrenome da sua mãe?',
      //   ],

    //   randomPjQuestions: [
    //     'Qual é a atividade da sua empresa?',
    //     'Qual o endereço da sua empresa?',
    //     'Me informe por gentileza o último sobrenome da sua mãe?',
    //   ],
    }
  },

  computed: {


    getPfQuestions() {
      const randomNumber = util.getRandomNumber(
        -1,
        this.randomPfQuestions.length - 1,
      )
      const questions = this.requiredQuestions
      questions.push(this.randomPfQuestions[randomNumber])
      return questions
    },

    getPjQuestions() {
      const randomNumber = util.getRandomNumber(
        -1,
        this.randomPfQuestions.length - 1,
      )
      const questions = this.requiredQuestions
      questions.push(this.requiredPjQuestion)
      questions.push(this.randomPjQuestions[randomNumber])
      return questions
    },
  },

  methods: {
    loadQuestions() {
      if (this.certificateType === 'certificate_pf') {
        this.$store.dispatch('loadPfQuestions')
      } else if (this.certificateType === 'certificate_pj') {
        this.$store.dispatch('loadPJQuestions')
      } else {
        window.Swal.toast().fire({ icon: 'error', title: 'Por favor, selecione o tipo de pessoa antes de carregar as perguntas' })
      }
    },

    refreshPage() {
      window.location.reload()
    },
  },
}
</script>
