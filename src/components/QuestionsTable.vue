<template>
  <div>
    <table class="table table-striped shadow-sm">
      <thead class="thead-dark">
        <tr>
          <th class="text-center check">Realizada</th>
          <th>Pergunta</th>
        </tr>
      </thead>
      <tbody>
        <question
          v-for="question in tableQuestions"
          :key="question"
          :question="question"
        />
      </tbody>
    </table>
  </div>
</template>

<script>
import Question from './Question.vue'

export default {
  components: {
    Question,
  },

  computed: {
    tableQuestions() {
      return this.$store.state.tableQuestions
    },
  },
}
</script>

<style scoped>
.check {
  width: 10%;
}
</style>
