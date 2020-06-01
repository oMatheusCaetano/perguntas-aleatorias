<template>
  <div>
    <div class="form-group">
      <label for="certificate_type">Escolha uma das opções abaixo</label>
      <select
        class="form-control shadow-sm"
        id="certificate_type"
        v-model="certificateType"
      >
        <option value="">-- Selecione --</option>
        <option value="certificate_pf">Certificado Pessoa Física</option>
        <option value="certificate_pj">Certificado Pessoa Jurídica</option>
      </select>
    </div>

    <div class="form-group">
      <button
        class="btn btn-success btn-sm shadow-sm animate__animated"
        :class="{ animate__pulse: buttonHover }"
        @mouseenter="buttonHover = true"
        @mouseout="buttonHover = false"
        @click="loadQuestions()"
      >
        Carregar Perguntas
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    certificateType: '',
    buttonHover: false,
  }),

  methods: {
    loadQuestions() {
      this.$store.commit('CLEAR_TABLE')
      if (this.certificateType === 'certificate_pf') {
        this.$store.dispatch('loadPfQuestions')
        window.EventBus.$emit('SET_ALL_UNCHECKED')
      } else if (this.certificateType === 'certificate_pj') {
        this.$store.dispatch('loadPjQuestions')
        window.EventBus.$emit('SET_ALL_UNCHECKED')
      } else {
        window.Swal.toast().fire({
          icon: 'error',
          title: 'Por favor, selecione um opção antes de carregar as perguntas',
        })
      }
    },
  },
}
</script>
