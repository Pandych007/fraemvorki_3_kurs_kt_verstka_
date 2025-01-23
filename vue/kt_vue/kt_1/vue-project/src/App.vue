<template>
  <div>
    <AddForm @addNewTodo="addNewTodo"></AddForm>
    <TodoList
      :todos="data"
      @removeTodo="removeTodo"
      @changeTodo="changeTodo"
    ></TodoList>
  </div>
</template>

<script>
import AddForm from "./components/AddForm.vue";
import TodoList from "./components/TodoList.vue";
import TodoItem from "./components/TodoItem.vue";

export default {
  components: {
    AddForm,
    TodoList,
    TodoItem,
  },
  data() {
    return {
      data: [
        { title: "Закончить колледж", completed: false },
        { title: "Пойти учиться дальше", completed: false },
        { title: "Найти работу по душе", completed: false },
        { title: "Начать изучать что-то новое", completed: true },
      ],
    };
  },
  methods: {
    addNewTodo(title) {
      let newTodo = {
        completed: false,
        title: title,
      };
      this.data.push(newTodo);
    },
    removeTodo(index) {
      this.data.splice(index, 1);
    },
    changeTodo(index) {
      this.data[index].completed = !this.data[index].completed;
    },
  },
};
</script>

<style>
.todo_item {
  display: flex;
  flex-direction: column;
  margin: 20px 170px;
  padding: 10px;
  outline: 2px solid rgb(140, 140, 140);
  box-shadow: 20px 20px 10px rgba(0, 0, 0, 0.1);
}

.input_elem {
  display: flex;
  justify-content: center;
  margin: 20px 400px;
}

.input_elem > input {
  width: 100%;
  box-shadow: 1px 1px 3px black;
}
</style>
