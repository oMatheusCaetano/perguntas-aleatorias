<template>
  <tr>
    <td class="text-center">
      <input
        type="checkbox"
        v-model="checkboxChecked"
        @change="changeQuestionStatus()"
      />
    </td>
    <td :class="{ checked: isDone }">
      {{ this.question }}
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    question: {
      type: String,
      required: true,
    },
  },

  data: () => ({
    checkboxChecked: false,
    isDone: false,
  }),

  methods: {
    changeQuestionStatus() {
      this.isDone = !this.isDone
    },
  },

  created() {
    window.EventBus.$on('SET_ALL_UNCHECKED', () => {
      this.checkboxChecked = false
      this.isDone = false
    })
  },
}
</script>

<style scoped>
.checked {
  text-decoration: line-through;
  color: #777;
  transition: 500ms;
}
</style>
