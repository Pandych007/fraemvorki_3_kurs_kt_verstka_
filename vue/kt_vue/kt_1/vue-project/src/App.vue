<template>
  <div>
    <AddForm @addTodo="addTodo" />
    <TodoList
      :todos="todos"
      @changeTodo="changeTodo"
      @deleteTodo="deleteTodo"
    />
  </div>
</template>

<script>
import AddForm from "./components/AddForm.vue"; // Используем правильное имя компонента
import TodoList from "./components/TodoList.vue";

export default {
  components: {
    AddForm,
    TodoList,
  },
  data() {
    return {
      todos: [
        { id: 1, title: "Закончить колледж", completed: false },
        { id: 2, title: "Пойти учиться дальше", completed: false },
        { id: 3, title: "Найти работу по душе", completed: false },
        { id: 4, title: "Начать изучать что-то новое", completed: true },
      ],
    };
  },
  methods: {
    addTodo(title) {
      const newTodo = {
        id: Date.now(),
        title,
        completed: false,
      };
      this.todos.push(newTodo);
    },

    changeTodo(id) {
      const todo = this.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },

    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
  },
};
</script>

<style scoped></style>
