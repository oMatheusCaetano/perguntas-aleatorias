<template>
  <div>
    <div class="container">
      <img
        class="mx-auto d-block mb-4 mt-3"
        height="100"
        src="./assets/img/logo.png"
        alt="soluti"
      />

      <div>
        <certificate-select />
      </div>

      <div>
        <questions-table />
      </div>
    </div>
  </div>
</template>

<script>
import CertificateSelect from './components/CertificateSelect.vue'
import QuestionsTable from './components/QuestionsTable.vue'

export default {
  components: {
    CertificateSelect,
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
