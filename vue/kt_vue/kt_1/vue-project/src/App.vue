<template>
  <div>
    <AddForm @addTodo="addTodo" />
    <TodoList
      :todos="todos"
      @changeTodos="changeTodos"
      @deleteTodoByid="deleteTodoByid"
    />
  </div>
</template>

<script>
import AddForm from "./components/AddForm.vue";
import TodoList from "./components/TodoList.vue";

export default {
  components: {
    AddForm,
    TodoList,
  },
  data() {
    const startTodos = [
      { id: 1, title: "Помыть руки", completed: true },
      { id: 2, title: "Сделать зарядку", completed: false },
      { id: 3, title: "Наконец изучить Vue", completed: true },
    ];
    let localData = JSON.parse(localStorage.getItem("todos"));
    return {
      todos: localData || startTodos,
    };
  },
  methods: {
    addTodo(title) {
      let newTodo = {
        id: Date.now(),
        title,
        completed: false,
      };
      this.todos.push(newTodo);
    },
    changeTodos(id) {
      const todo = this.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodoByid(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
  },
  watch: {
    todos(newTodos) {
      localStorage.setItem("todos", JSON.stringify(newTodos));
    },
  },
};
</script>

<style scoped>
/* Ваши стили */
</style>
