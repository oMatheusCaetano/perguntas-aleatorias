<template>
  <div>
    <div class="container">
      <img
        class="mx-auto d-block mb-4 mt-3"
        height="100"
        src="./assets/img/logo.png"
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
        <questions-table />
      </div>
    </div>
  </div>
</template>

<script>
import QuestionsTable from './components/QuestionsTable.vue'

export default {
  components: {
    QuestionsTable,
  },

  data: () => ({
    certificateType: '',
  }),

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
