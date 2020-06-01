<template>
    <tr>
      <td class="text-center" @change="changeQuestionStatus()">
        <input type="checkbox">
      </td>
      <td  :class="{ checked: isDone }">
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
    isDone: false,
  }),

  methods: {
    changeQuestionStatus() {
      this.isDone = !this.isDone
    },
  },
}
</script>

<style>
.checked {
  text-decoration: line-through;
  color: #777;
  transition: 500ms;
}
</style>
