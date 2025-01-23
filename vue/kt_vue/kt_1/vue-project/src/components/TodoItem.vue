<template>
  <div
    class="todo_card"
    :style="{ backgroundColor: todo.completed ? 'green' : 'red' }"
    @dblclick="handleDoubleClick"
    @click="handleClick"
  >
    <h2>{{ todo.title }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    todo: Object,
  },
  methods: {
    handleDoubleClick() {
      this.$emit("deleteTodoByid", this.todo.id);
    },
    handleClick() {
      this.$emit("changeTodos", this.todo.id);
    },
  },
};
</script>

<style scoped>
.todo_card {
  display: flex;
  flex-direction: column;
  margin: 20px 170px;
  padding: 10px;
  outline: 2px solid rgb(140, 140, 140);
  box-shadow: 20px 20px 10px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  text-align: center;
}
</style>
