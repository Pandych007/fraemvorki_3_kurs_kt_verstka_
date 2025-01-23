<template>
  <div class="input_elem">
    <input v-on:keydown="addNewTodo" type="text" />
  </div>
</template>

<script>
export default {
  emits: ["addNewTodo"],
  methods: {
    addNewTodo(event) {
      if (event.key === "Enter") {
        this.$emit("addNewTodo", event.target.value);
        event.target.value = "";
      }
    },
  },
};
</script>

<style></style>
