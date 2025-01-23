<template>
  <div class="input_elem">
    <input @keyup.enter="handleKeyUp" />
  </div>
</template>

<script>
export default {
  methods: {
    handleKeyUp(event) {
      this.$emit("addTodo", event.target.value);
    },
  },
};
</script>

<style scoped>
.input_elem {
  display: flex;
  justify-content: center;
  margin: 20px 400px;
}

.input_elem > input {
  width: 100%;
  box-shadow: 1px 1px 3px black;
  outline: none;
}
</style>
