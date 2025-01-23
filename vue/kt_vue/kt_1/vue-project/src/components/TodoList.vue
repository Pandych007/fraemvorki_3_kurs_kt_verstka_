<template>
  <div class="todo_list">
    <TodoItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @changeTodo="changeTodo"
      @deleteTodo="deleteTodo"
    />
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  components: {
    TodoItem,
  },
  props: {
    todos: Array,
  },
  methods: {
    changeTodo(id) {
      this.$emit("changeTodo", id);
    },
    deleteTodo(id) {
      this.$emit("deleteTodo", id);
    },
  },
};
</script>

<style scoped>
.todo_list {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
