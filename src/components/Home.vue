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
          <option value="">-- Selecione --</option>
          <option value="certificate_pf">Certificado Pessoa Física</option>
          <option value="certificate_pj">Certificado Pessoa Jurídica</option>
        </select>
      </div>

      <div class="form-group">
        <button class="btn btn-success btn-sm" @click="loadQuestions()">
          Carregar Perguntas
        </button>
        <button class="btn btn-danger btn-sm ml-3">
          Limpar Lista
        </button>
      </div>

      <div>
        <table class="table table-striped">
          <thead class="thead-dark">
            <tr>
              <th class="text-center check">Realizada</th>
              <th>Pergunta</th>
            </tr>
          </thead>
          <tbody>
            <question v-for="question in tableQuestions" :key="question" :question="question"/>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Question from './Question.vue'

export default {
  components: {
    Question,
  },
  data: () => ({
    certificateType: '',
    isDone: true,
  }),

  computed: {
    tableQuestions() {
      return this.$store.state.tableQuestions
    },
  },

  methods: {
    loadQuestions() {
      if (this.certificateType === 'certificate_pf') {
        this.$store.dispatch('loadPfQuestions')
      } else if (this.certificateType === 'certificate_pj') {
        this.$store.dispatch('loadPjQuestions')
      } else {
        window.Swal.toast().fire(
          {
            icon: 'error',
            title: 'Por favor, selecione o tipo de pessoa antes de carregar as perguntas',
          },
        )
      }
    },
  },
}
</script>

<style scoped>
.check {
  width: 10%;
}

.checked {
  text-decoration: line-through;
  color: #777;
}
</style>
