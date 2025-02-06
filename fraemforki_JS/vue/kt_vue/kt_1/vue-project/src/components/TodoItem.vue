<template>
  <div class="todo_item_wrapper">
    <div
      :class="completed ? 'green' : 'red' + ' todo_item'"
      @click="handleChange"
      @dblclick="handleRemove"
    >
      <h2>{{ title }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "completed"],
  emits: ["handleRemove", "handleChange"],
  methods: {
    handleRemove() {
      this.$emit("handleRemove");
    },
    handleChange() {
      this.$emit("handleChange");
    },
  },
};
</script>

<style>
.todo_item_wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.red {
  background-color: rgb(255, 0, 0);
  width: 400px;
  height: 200px;
  padding: 10px;
  margin: 10px;
  border-radius: 30px;
  box-shadow: 20px 20px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.green {
  background-color: rgb(0, 188, 0);
  width: 400px;
  height: 200px;
  padding: 10px;
  margin: 10px;
  border-radius: 30px;
  box-shadow: 30px 20px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
