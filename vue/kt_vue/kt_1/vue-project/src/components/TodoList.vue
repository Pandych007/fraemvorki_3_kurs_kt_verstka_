<template>
  <div>
    <TodoItem
      v-for="(todo, index) in todos"
      :key="index"
      :title="todo.title"
      :completed="todo.completed"
      @handleChange="handleChange(index)"
      @handleRemove="handleRemove(index)"
    ></TodoItem>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  props: {
    todos: Array,
  },
  components: {
    TodoItem,
  },
  methods: {
    handleChange(index) {
      this.$emit("changeTodo", index);
    },
    handleRemove(index) {
      this.$emit("removeTodo", index);
    },
  },
};
</script>

<style></style>
