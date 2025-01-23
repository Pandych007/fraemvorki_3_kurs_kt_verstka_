<template>
  <div
    :class="todo.completed ? 'green' : 'red' + ' todo_item'"
    @click="handleClick"
    @dblclick="handleDoubleClick"
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
      this.$emit("deleteTodo", this.todo.id);
    },
    handleClick() {
      this.$emit("changeTodo", this.todo.id);
    },
  },
};
</script>

<style scoped>
.todo_item {
  display: flex;
  flex-direction: column;
  margin: 20px;
  padding: 10px;
  outline: 2px solid rgb(140, 140, 140);
  box-shadow: 20px 20px 10px rgba(0, 0, 0, 0.1);
  justify-content: center;
  align-items: center;
  text-align: center;
}

.red {
  background-color: rgb(255, 0, 0);
  width: 400px;
  height: 200px;
  border-radius: 30px;
  box-shadow: 20px 20px 10px rgba(0, 0, 0, 0.1);
}

.green {
  background-color: rgb(0, 188, 0);
  width: 400px;
  height: 200px;
  border-radius: 30px;
  box-shadow: 30px 20px 10px rgba(0, 0, 0, 0.1);
}
</style>
